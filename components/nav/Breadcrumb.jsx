import Link from "next/link";
  const Breadcrumb = ({request, href}) => {
    return (
      <div style={{display : 'flex'}} className='breadcrumb'>
        <Link href={"/"}  legacyBehavior>
            <a>
            <h1 className="logo brand" >@karlmlr/
            </h1>
            </a>
        </Link>
        <Link href={href}  legacyBehavior>
            <a>
            <h1 className="logo brand" >{request}/
            </h1>
            </a>
        </Link>
        <span className="oblique"></span>
      </div>

    );
  };
  
  export default Breadcrumb;