import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Submitting the data !!");
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          className={errors.firstName ? "input-error" : ""}
          {...register("firstName", {
             required: { value: true, message: "Please enter first name" },
            minLength: { value: 3, message: "Min Length atleast 3" },
            maxLength: { value: 10, message: "Max Length atmost 10" },
          })}
        />
        {errors.firstName && (
          <p className="error-msg">{errors.firstName.message}</p>
        )}
      </div>
      <br />
      <div>
        <label>Middle Name:</label>
        <input type="text" {...register("middleName")} />
      </div>
      <br />
      <div>
        <label>Last Name:</label>
        <input
          className={errors.lastName ? "input-error" : ""}
          type="text"
          {...register("lastName", {
            required: { value: true, message: "Please enter Last name" },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "last name is not as per the rules",
            },
          })}
        />
        {errors.lastName && (
          <p className="error-msg">{errors.lastName.message}</p>
        )}
      </div>
      <br />
      <input
        type="submit"
        disabled={isSubmitting}
        value={isSubmitting ? "Submitting" : "submit"}
      />
    </form>
  );
}

export default App;
