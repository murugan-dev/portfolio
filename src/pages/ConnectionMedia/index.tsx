import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ConnectionMedia = () => {
  return (
    <div className="flex gap-6 lg:gap-12 justify-center items-center mt-4 text-white ">
      
      {/* Email */}
      <a 
        href="mailto:muruganatdev@gmail.com" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Send Email"
      >
        <MailOutlineIcon className="!text-4xl text-white  hover:scale-125 transition duration-1000" />
      </a>

      {/* GitHub */}
      <a 
        href="https://github.com/murugan-dev?tab=repositories" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Visit GitHub"
      >
        <GitHubIcon className="!text-4xl text-white hover:scale-125 transition duration-300" />
      </a>

      {/* LinkedIn */}
      <a 
        href="https://www.linkedin.com/in/murugan-mk/" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Visit LinkedIn"
      >
        <LinkedInIcon className="!text-4xl text-white hover:scale-125 hover:text-blue-500 transition duration-300" />
      </a>
      
    </div>
  );
};

export default ConnectionMedia;
