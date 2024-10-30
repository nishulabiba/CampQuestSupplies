import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const errorMessage = isRouteErrorResponse(error) ? error.statusText || error.data.message : "An unknown error occurred";

  return (
    <div className="flex bg-white justify-center items-center">
      <img src="https://cdni.iconscout.com/illustration/premium/thumb/404-error-7621857-6167011.png" alt="404 error illustration" />
      <div className="flex flex-col">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{errorMessage}</i>
        </p>
        <Link className="btn rounded-xl btn-primary animate-bounce mt-10 flex items-center" to="/">
          <ArrowLeftCircleIcon className="h-6 w-6 mr-2" /> Go Back!
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
