'use client'

import Swal from 'sweetalert2'

const SuccessModal = ( {title} ) => {

    console.log('check this', title)

    Swal.fire({
        position: "top-center",
        icon: "success",
        title: {title} || "Successfully!",
        showConfirmButton: false,
        timer: 1500
    });
};

export default SuccessModal;