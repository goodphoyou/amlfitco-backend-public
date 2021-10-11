const express = require('express')
const axios = require('axios')
const okta = require('@okta/okta-sdk-nodejs');
const app = express();
const port = 4000;
const drivenMenFolder = './drivenmen/';
const gluteRecruitsFolder = './gluterecruits/';
app.use(express.json());
app.use(express.urlencoded());


const fs = require('fs');
const cors = require("cors")
app.use(cors({origin:true,credentials: true}));

const OktaJwtVerifier = require('@okta/jwt-verifier');
const { nextTick } = require('process');

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: '' // required
});

const noCoursesClient = new okta.Client({
  orgUrl: '',
  token: ''    // Obtained from Developer Dashboard
});

const gluteRecruitClient = new okta.Client({
  orgUrl: '',
  token: ''    // Obtained from Developer Dashboard
});

const drivenMenClient = new okta.Client({
  orgUrl: '',
  token: ''    // Obtained from Developer Dashboard
});

const bothCourseClient = new okta.Client({
  orgUrl: '',
  token: ''    // Obtained from Developer Dashboard
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/createUser', cors(), async (req, res) => {
  console.log('createUser received', req.body.user)
  console.log('group ID', req.body.groupID)
  let client
  if (req.body.groupID.length < 1){
    client = noCoursesClient
    console.log('no group given wtf')
  }
  if (req.body.groupID.length > 1){
    client = bothCourseClient
    console.log('both courses')
  }
  if (req.body.groupID.length === 1 && req.body.groupID[0] === '00g21znld7kraJGgK5d7' ){
    client = drivenMenClient
    console.log('driven men only')
  }
  if (req.body.groupID.length === 1 && req.body.groupID[0] === '00g21ziy2qFutQGH25d7' ){
    client = gluteRecruitClient
    console.log('glute recruits only')
  }
  client.createUser(req.body.user)
    .then(user => {
      console.log('Created user', user);
      res.send(user)
    }).catch( (err) => {
      console.log('error', err)
    })
})

app.get('/testimonials',  (req, res) =>{
  let testimonials = collectTestimonials()
  // let testimonialMedia = collectTestimonialMedia()
  console.log(testimonials)
  res.send(testimonials)
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}!`)
});

app.post('/makeRoutes', cors(), async (req, res) => {
  //console.log(req.body)
  if (req.body.color === 'blue'){
    // fs.readdir('./bluecourse/', (err, files) => {
    let course = makeCourseObject(drivenMenFolder)
    //console.log(course)
    course.forEach( subsection =>{
      console.log(subsection)
    })
    res.send(course)
  }else if(req.body.color === 'pink'){
    let course = makeCourseObject(gluteRecruitsFolder)
    //console.log(course)
    course.forEach( subsection =>{
      console.log(subsection)
    })
    res.send(course)

  }
  else{
    res.send('course is not blue')
  }
});

const readFolderSync = (folder) => {
  var directory
  directory = fs.readdirSync(folder)
  //console.log(directory)
  return directory
}

const makeCourseObject = (folder) => {
  courseDirectory = []
  let directory = readFolderSync(folder)
  directory.forEach(file => {
    const section = {
      //id
      //path
      //subsections: [ array of subsection objects]
    }
    const filepath = folder + file
    section['path'] = filepath
    let subsections = []
    // courseDirectory.push(section)
    if ( fs.lstatSync(filepath).isDirectory() ){
      // console.log(`${filepath} is a folder`)
      let sectionDirectory = readFolderSync(filepath)
      sectionDirectory.forEach(subFile => {
        const subsection = {
          // title: 
          // subpath: FOR URL
          // heading: heading
          // videoLink: link to vimeo
          // DATA: markdown file content(?) 
          // attachmentLink: link to attachemnt
        }
        //console.log(subFile)
        if (subFile === 'id.txt'){
          //console.log('id found')
          let id = fs.readFileSync(`${filepath}/${subFile}`, "utf8")
          section['id'] = id     
        }else{
          let lessonPath = `${filepath}/${subFile}`
          subsection['subpath'] = subFile
          //console.log(lessonPath)
          if ( fs.lstatSync(lessonPath).isDirectory() ){
            let lessonDirectory = readFolderSync(lessonPath)
            lessonDirectory.forEach(lessonFile => {
              if (lessonFile === 'video.txt'){
                let videoLink = fs.readFileSync(`${lessonPath}/${lessonFile}`, "utf8")
                //console.log(videoLink)
                subsection['videoLink'] = videoLink
              } else if( lessonFile === 'heading.txt'){
                  let heading = fs.readFileSync(`${lessonPath}/${lessonFile}`, "utf8")
                  //console.log(heading)
                  subsection['heading'] = heading
              }else if( lessonFile === 'title.txt'){
                let title = fs.readFileSync(`${lessonPath}/${lessonFile}`, "utf8")
                //console.log(title)
                subsection['title'] = title
              }else if(lessonFile.includes('md')){
                //console.log(lessonFile)
                let content = fs.readFileSync(`${lessonPath}/${lessonFile}`, "utf8")
                subsection['content'] = content
              }else if( lessonFile === 'attachment.txt'){
                //console.log(lessonFile)
                let content = fs.readFileSync(`${lessonPath}/${lessonFile}`, "utf8")
                subsection['attachmentLink'] = content
              }
            })
          }
          //console.log(subsection)
          subsections.push(subsection)
        }

        
      })
    }
    section['subsections'] = subsections
    courseDirectory.push(section)

  })
  //console.log(courseDirectory)
  return courseDirectory
}

const collectTestimonials = () => {
  let testimonialNames = readFolderSync('./testimonials/')
  let testimonials = []
  testimonialNames.forEach( folder =>{
    testimonialElements = readFolderSync(`./testimonials/${folder}`)
    testimonialObject = {}
    testimonialElements.forEach( file => {
      if (!file.includes('photo')){    
        let testimonial = fs.readFileSync(`./testimonials/${folder}/${file}`, "utf8")
        testimonialObject['text'] = testimonial
      }
      else if(file.includes('photo')){
        let testimonialPhoto = fs.readFileSync(`./testimonials/${folder}/${file}`, "utf8")
        testimonialObject['photoLink'] = testimonialPhoto
      }
    })
    testimonials.push(testimonialObject)

  })
  return testimonials
}

