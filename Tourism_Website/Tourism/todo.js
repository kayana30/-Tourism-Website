new Vue({
  el:"#app",
  data(){
    return{
      placelist:[],
      place:"",
      color:""

    }
  },
  methods:{
  addplace:function(){
    if(this.place!=""){
      this.placelist.push(this.place);
      this.place="";
      this.color="#fff";
    }else{
      this.color="brown";
    }
  },
  removeplace:function(index){
  this.placelist.splice(index,1);
  }
  },
})