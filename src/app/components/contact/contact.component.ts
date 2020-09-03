import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
  }
  form = {
    nombre: '',
    email: '',
    subject:'',
    message: '',
    from: 'jioc396@gmail.com'
  }

  enviar(){
    if(this.form.nombre == "" || this.form.email == ""){
      console.log("no enviar")
    }else{
      let a = `subject=${this.form.subject}&from=${this.form.from}&fromName=${this.form.nombre}&replyTo=&replyToName=ismaelosuna.ca@gmail.com&to=ismaelosuna.ca@gmail.com&channel=&bodyHtml=${this.form.message}&isTransactional=false`
    this.http.post(`https://api.elasticemail.com/v2/email/send?apikey=CDBF94C69A7713179DC2BA5147AC60B2256E4EA3C654902C9BC3BAE510B1A850FE2F3FBF1E3745ACB40B98E340768A67&subject=${this.form.subject}&from=${this.form.from}&fromName=${this.form.nombre}&replyTo=&replyToName=ismaelosuna.ca@gmail.com&to=ismaelosuna.ca@gmail.com&channel=&bodyHtml=${this.form.message}, ${this.form.email}&isTransactional=false`,{} ).subscribe(resp=>{
      //console.log()
      if(resp['success']){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Enviado correctamente'
        })
        this.form.nombre = "";
        this.form.email = "";
        this.form.subject = "";
        this.form.message = "";
      }
    })
    }
   console.log(this.form)
  
  }
}
