import Button from "../Components/Button";
const Subscribe = () => {
  return (
    <section
      className="max-container flex items-center justify-between max-lg:flex-col gap-10 max-lg:text-center"
      id="contact-us"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up from
        <span className="text-coral-red"> Updates </span> & Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-500 rounded-full">
        <input
          type="text"
          placeholder="muzammilq78@gmail.com"
          className="input"
        />
        <div className=" flex max-sm:justify-center items-center max-sm:w-full">
          <Button label="Sign Up" full></Button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
