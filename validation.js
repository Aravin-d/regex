//store all regex in an object
// The name property and the object name should match

const patterns = {
    telephone: /^\d{10}$/,
    username: /^[a-z][a-z+\d]{4,11}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email:/^([a-z]+)([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('keyup', (e) => {
        // console.log(e.target.attributes.name.value);
        validation(e.target, patterns[e.target.attributes.name.value])
    })
})


//validation functions

function validation(field, regEx) {
    if (regEx.test(field.value.trim())){
        field.className = 'valid'
    }
    else {
        field.className = 'invalid'
    }
}

