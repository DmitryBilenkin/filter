import ProjectListItem from "./ProjectListItem";
import './ProjectList.css'

function ProjectList(props) {
  const imgArr = props.projects.map(proj => proj.img);
  console.log(imgArr);

  return (
    <div className='projectlist'>
        <ProjectListItem image={imgArr[0]}/>
        <ProjectListItem image={imgArr[1]}/>
        <ProjectListItem image={imgArr[2]}/>
        <ProjectListItem image={imgArr[3]}/>
        <ProjectListItem image={imgArr[4]}/>
        <ProjectListItem image={imgArr[5]}/>
        <ProjectListItem image={imgArr[6]}/>
        <ProjectListItem image={imgArr[7]}/>
        <ProjectListItem image={imgArr[8]}/>
        <ProjectListItem image={imgArr[9]}/>
        <ProjectListItem image={imgArr[10]}/>
        <ProjectListItem image={imgArr[11]}/>
        <ProjectListItem image={imgArr[12]}/>
        <ProjectListItem image={imgArr[13]}/>
        <ProjectListItem image={imgArr[14]}/>
        <ProjectListItem image={imgArr[15]}/>
        <ProjectListItem image={imgArr[16]}/>    
    </div>
  )
};

export default ProjectList;
