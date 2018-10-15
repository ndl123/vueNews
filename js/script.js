var vm = new Vue({
	el:"#app",
	data:{
		index:0,
		magessA:"",
		magessB:"",
		magessC:"",
		magessD:"",
		magessE:"",
		magesA:"",
		magesB:"",
		magesC:"",
		magesD:"",
		magesE:"",
		news:[
			{"label":"军事","title":"军事1","name":"中央电视台","content":"新闻内容","time":"时间","timeG":"时间","state":"true"},
			{"label":"国内","title":"国内1","name":"中央电视台","content":"新闻内容","time":"时间","timeG":"时间","state":"true"},
			{"label":"历史","title":"历史1","name":"中央电视台","content":"新闻内容","time":"时间","timeG":"时间","state":"true"},
			{"label":"军事","title":"军事2","name":"中央电视台","content":"新闻内容","time":"时间","timeG":"时间","state":"true"},
			{"label":"美食","title":"舌尖上的中国一季","name":"中央电视台","content":"新闻内容","time":"时间","timeG":"时间","state":"true"},
		]
	},
	computed:{
		//获取时间戳
		getTime:function(){
			var shijianchuo = (new Date()).getTime();
       		return shijianchuo	
		}
		
	},
	methods:{
		//添加新闻
		add:function(){
			
			this.news.unshift({"label":this.magessD,"title":this.magessA,"name":this.magessB,"content":this.magessC,"time":this.getTime,"timeG":"时间","state":this.magessE},)
			//添加本地存储
			localStorage.setItem('news',JSON.stringify(this.news));
			this.magessA="";
			this.magessB="";
			this.magessC="";
			this.magessD="";
			this.magessE="";
			$('#tianjiaxinwen').modal('hide')
		},
		//编辑按钮
		edit:function(index){
			this.index = index
			this.magesA = vm.news[index].title;
			this.magesB = vm.news[index].name;
			this.magesC = vm.news[index].content;
			this.magesD = vm.news[index].label;
			this.magesE = vm.news[index].state;
		},
		//确认编辑
		gai:function(){
			vm.news[this.index].title = this.magesA
			vm.news[this.index].name = this.magesB
			vm.news[this.index].content = this.magesC
			vm.news[this.index].label = this.magesD
			vm.news[this.index].state = this.magesE
			vm.news[this.index].timeG = this.getTime
			$('#bianjixinwnen').modal('hide')
			localStorage.setItem('news',JSON.stringify(this.news));
		},
		//删除
		del:function(index){
			if(confirm("确认删除么？")){
				this.news.splice(index,1)
				localStorage.setItem('news',JSON.stringify(this.news));
			}
		},
		ss:function(index){
			this.news[index].state = !this.news[index].state
			localStorage.setItem('news',JSON.stringify(this.news));
		}
		
	},
	created:function(){
		if(localStorage.getItem('news') !== null){
			 this.news = JSON.parse(localStorage.getItem('news'));
		} 
	}
})