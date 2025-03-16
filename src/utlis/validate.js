export const validateData = (email,password) =>{
    const isEmailValid = /^\S+@\S+\.\S+$/.test(email);
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    
    if(!isEmailValid) return "Invalid Email ID"
    if(!isPasswordValid) return "Invalid Password"

    return null;

}