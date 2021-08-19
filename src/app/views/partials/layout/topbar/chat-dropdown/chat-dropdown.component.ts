// Angular
import { Component, Input } from '@angular/core';

@Component({
	selector: 'kt-chat-dropdown',
	templateUrl: './chat-dropdown.component.html',
	styleUrls: ['chat-dropdown.component.scss']
})
export class ChatDropdownComponent {

    // Show dot on top of the icon
    @Input() dot: string;

    // Show pulse on icon
    @Input() pulse: boolean;

    @Input() pulseLight: boolean;

    // Set icon class name
    @Input() icon = 'flaticon2-bell-alarm-symbol';
    @Input() iconType: '' | 'success';

    // Set true to icon as SVG or false as icon class
    @Input() useSVG: boolean;

    // Set bg image path
    @Input() bgImage: string;

    // Set skin color, default to light
    @Input() skin: 'light' | 'dark' = 'light';

    @Input() type: 'brand' | 'success' = 'success';

    activeChat = false;

    messageBox = "";

    botImage = "https://fsa.zobj.net/crop.php?r=1lzbWZoiMMitlIney-U6KzD_LUGcKrzoQ-vBBMmhXaH9xSOhqHY2V1hH2NwJVEDZzYtdUCKdF5Jpnl6qKuD2aK8lu4ZqfupZr4aTRbh46au4tdxbElBBVlrk7yaHuZi4l9wPTzqm6vq5Sari";
    botName = "Vodafone Bot";
    botDesc = "Vodafone Bot";

    chats = [{
        bot:true,
        botImage:"https://fsa.zobj.net/crop.php?r=1lzbWZoiMMitlIney-U6KzD_LUGcKrzoQ-vBBMmhXaH9xSOhqHY2V1hH2NwJVEDZzYtdUCKdF5Jpnl6qKuD2aK8lu4ZqfupZr4aTRbh46au4tdxbElBBVlrk7yaHuZi4l9wPTzqm6vq5Sari",
        msg: {
            title:"Mensaje de Bienvenida",
            options:[]
        },
        typeOptions: false
    },{
        bot:true,
        botImage:"https://fsa.zobj.net/crop.php?r=1lzbWZoiMMitlIney-U6KzD_LUGcKrzoQ-vBBMmhXaH9xSOhqHY2V1hH2NwJVEDZzYtdUCKdF5Jpnl6qKuD2aK8lu4ZqfupZr4aTRbh46au4tdxbElBBVlrk7yaHuZi4l9wPTzqm6vq5Sari",
        msg: {
            title:'selecciona una:',
            options: [
                {
                    id:1,
                    respuesta:'Si, el decodificador siempre debe ir conectado al Router por cable.',
                    value:'¿Es obligatorio que el decodificador esté conectado por cable al Router?'},
                {
                    id:2,
                    respuesta:'El coste del envío a domicilio de la Tarjeta Sim es de 9 eur/iva incluido.',
                    value:'Querría saber el coste de envío de la Tarjeta Sim'},
                {
                    id:3,
                    respuesta:'Si, para poder beneficiarte de la promoción BTS siempre debe llevar la orden el Superwifi.',
                    value:'¿En la promoción BTS, es obligatorio contratar Superwifi?'},
                {
                    id:4,
                    respuesta:'No, esta promoción solo está disponible para clientes potenciales, es incompatible con clientes cartera de fijo o móvil.',
                    value:'¿Se puede aplicar la promoción 50% 12 meses Ilimitada Total a clientes cartera?'},
                {
                    id:5,
                    respuesta:'Para conocer el ciclo de facturación de un cliente, accederemos a la pestaña “Facturación” dentro de la ficha del cliente en Smart. Una vez dentro debemos seleccionar la pestaña “Datos Facturación” donde se indica el Ciclo de factura.',
                    value:'¿Cómo puedo saber el ciclo de facturación de un cliente?'},
                {
                    id:6,
                    respuesta:'Para modificar los datos de contacto de un cliente se debe acceder a  la pestaña  “Información de contacto” que encontraremos en Smart una vez que hemos accedido a su ficha. Dentro de esta pestaña seleccionaremos la opción “Detalle/Editar”.',
                    value:'¿Dónde puedo modificar los datos de contacto de un cliente?'},
                {
                    id:7,
                    respuesta:'Para saber si un cliente es autoinstalable antes de cargar el contrato buscamos  la dirección del clte y en  Resultados de Búsqueda aparece el campo “Autoinstalación” donde se indica SI o NO.',
                    value:'¿Cómo sé si un cliente es autoinstalable?'},
            ]
        },
        typeOptions: true
    }];

    chatCounter = 0;
    loadingChat = false;

    Fake = [
        {msg:{options:[],title:'No te entiendo. Cambiando a un Agente...'},typeOptions:false},
        {msg:{options:[],title:'Hola Soy Rosa Montes'},typeOptions:false},
        {msg:{options:[],title:'Respuestas....'},typeOptions:false},
    ]

	constructor(
        
    ) {
    }

    ngOnInit(){
    }
    
    toogleChat(){
        this.activeChat  ? this.activeChat = false : this.activeChat = true;
    }

    SendMessage(){

        if(this.messageBox != ''){
            this.chats.push({
                bot:false,
                botImage:"",
                msg:{
                    title:this.messageBox,
                    options:[]
                },
                typeOptions: false
            })
    
            this.loadingChat = true;                 
            this.insertFakeMessage();
        }

        this.messageBox = '';
    }

    insertFakeMessage(autoMessage = 0){

        var resp = this.chats[1].msg.options.filter( option => option.id == autoMessage)
        if(autoMessage != 0){
            this.chats.push({
                bot:true,
                botImage:this.botImage,
                msg:{
                    title: resp[0].respuesta,
                    options: []
                },
                typeOptions: false
            })
        }else{

            setTimeout(()=> {            
                this.loadingChat = false;
    
                this.chats.push({
                    bot:true,
                    botImage:this.botImage,
                    msg:{
                        title: this.Fake[this.chatCounter].msg.title,
                        options: this.Fake[this.chatCounter].msg.options
                    },
                    typeOptions: this.Fake[this.chatCounter].typeOptions
                })
                this.chatCounter++;
    
                if(this.chatCounter == 1){
                    setTimeout(()=> {
                        this.changeToHuman()
                    }, 500);
                }
            }, 1000);

        }

    }

    changeToHuman(){
        this.botImage = "http://askavenue.com/img/17.jpg";
        this.botName = "Rosa Montes";
        this.botDesc = "Vodafone Agent";

        this.insertFakeMessage()
    }
}
