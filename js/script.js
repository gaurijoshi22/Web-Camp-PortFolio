	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }

    const name1 = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    const submit = document.getElementsByClassName('contact-form');

function sendEmail(){
    const ebody=`Name: ${name1.value}
      <br>
       Email : ${email.value}
       <br>
       Message: ${message.value}`;
  Email.send({
  Host : "smtp.elasticemail.com",
  Username : "gauri.joshi@cumminscollege.in",
  Password : "",
  To : 'gauri.joshi@cumminscollege.in',
  From : 'gauri.joshi@cumminscollege.in',
  Subject : "tried to contact from" + email.value,
  Body : ebody
}).then(
message => alert(message)
);
console.log(ebody)
  }
