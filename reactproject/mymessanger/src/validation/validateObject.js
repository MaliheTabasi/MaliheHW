var validateObject={
    // firstName : {
    //     presence: {
    //         message: '^.لطفا نام خود را وارد نمایید'
    //     },
    //     length: {
    //         minimum:3,
    //         message: '^ .نام باید از دو حرف بیشتر باشد'
    //      }
    // },
    // lastName : {
    //     presence: {
    //         message: '^.لطفا نام خانوادگی خود را وارد نمایید'
    //     },
    //     length: {
    //         minimum:3,
    //         message: '^ .نام خانوادگی باید از دو حرف بیشتر باشد'
    //      }
    // },
    email: {
        presence: {
            message :   '^ لطفا ایمیل خود را وارد کنید'
        },
        email:{
            message : '^لطفا ایمیل معتبری  وارد نمایید'
        }

        },   
    password : {
        presence: {
            message: '^لطفا رمز عبور را وارد نمایید.'
        },
        length: {
            minimum:3,
            message: '^ رمز عبور باید از دو حرف بیشتر باشد.'
     }
     } ,
    reTypePassword : {
        presence: {
            message: '^لطفا رمز مجدد را وارد نمایید.'
        },
        length: {
            minimum:3,
            message: '^ رمز باید از دو حرف بیشتر باشد.'
     }
     }   
}
    export default validateObject