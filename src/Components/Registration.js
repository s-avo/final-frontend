import { useRef } from 'react'
import { useForm } from 'react-hook-form'

function Registration() {

    const {
        register,
        formState: { errors },
        handleSubmit,
        watch
    } = useForm({
        mode: "onChange"
    });
    const onSubmit = (data) => {
        console.log(data);
        alert("Thank you for registering! You will receive an email shortly.");
     
    };
    const password = useRef({});
    password.current = watch("password", "");

    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={handleSubmit(onSubmit)} style={{width: 400}}>

                <div className="row mb-3 mt-3">
                    <div className="col form-validate">
                        <input
                            className="form-control"
                            placeholder="First name *"
                            {...register("firstName", {
                                required: "Required",
                                minLength: {
                                    value: 2,
                                    message: "Must be at least 2 characters long"
                                },
                                pattern: {
                                    value: /[a-z]/gi,
                                    message: "Invalid characters"
                                }
                            })}
                        />
                        {errors.firstName && <p>{errors.firstName.message}</p>}
                    </div>

                    <div className="col form-validate">
                        <input
                            className="form-control"
                            placeholder="Last name *"
                            {...register("lastName", {
                                required: "Required",
                                minLength: {
                                    value: 2,
                                    message: "Must be at least 2 characters long"
                                },
                                pattern: {
                                    value: /[a-z]/gi,
                                    message: "Invalid characters"
                                }
                            })}
                        />
                        {errors.lastName && <p>{errors.lastName.message}</p>}
                    </div>
                </div>

                <div className="col form-validate">
                        <input
                            className="form-control"
                            placeholder="Username *"
                            {...register("username", {
                                required: "Required",
                                minLength: {
                                    value: 2,
                                    message: "Must be at least 2 characters long"
                                },
                                pattern: {
                                    value: /[a-z]/gi,
                                    message: "Invalid characters"
                                }
                            })}
                        />
                        {errors.username && <p>{errors.username.message}</p>}
                    </div>

                <div className="row mb-3 mt-3">
                    <div className="col form-validate">
                        <select className="form-select">
                            <option defaultValue hidden>Select country:</option>
                            <option value="1">Latvia</option>
                            <option value="2">Lathuania</option>
                            <option value="3">Estonia</option>
                            <option value="4">Ukraine</option>
                            <option value="5">United States of America</option>
                            <option value="6">Sweden</option>
                            <option value="7">Germany</option>
                            <option value="8">Poland</option>
                        </select>
                    </div>
                </div>

                <div className="row  mb-3">
                    <div className="col form-validate">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Email *"
                            {...register("email", {
                                required: "Required",
                                pattern: {
                                    value: /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/,
                                    message: "Invalid email address"
                                }
                            })}
                        />
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>
                </div>

                <div className="row">
                    <div className="col form-validate">
                        <div className="input-group mb-3">
                            <input
                                type="password"
                                id="input-password"
                                className="form-control"
                                placeholder="Password *"
                                {...register("password", {
                                    required: "Required",
                                    minLength: {
                                        value: 8,
                                        message: "Must be at least 8 characters long"
                                    }
                                })}
                            />
                            {errors.password && <p>{errors.password.message}</p>}
                        </div>

                        <div className="input-group mb-3">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repeat password *"
                                {...register("repeatpassword", {
                                    validate: value => value === password.current || "Passwords do not match"
                                })}
                            />
                            {errors.repeatpassword && <p>{errors.repeatpassword.message}</p>}
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col form-validate">
                        <div className="form-check py-2">
                            <input className="form-check-input" type="checkbox" value="" id="termsInput" {...register("termsInput", {
                                required: "Please check the box to proceed"
                            })}
                            />
                            {errors.termsInput && <p>{errors.termsInput.message}</p>}
                            <label className="form-check-label" htmlFor="termsInput">
                               I agree with terms and conditions *
                            </label>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <button type="submit" className="btn btn-primary green-btn">Register</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Registration