const generateOTP = (length?:number) => {
    // Declare a digits variable

    // which stores all digits
    let max = 4
    let digits = "0123456789";
    if (length) max = length

    let OTP = "";

    for (let i = 0; i < max; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }

    return OTP;
}

module.exports = generateOTP