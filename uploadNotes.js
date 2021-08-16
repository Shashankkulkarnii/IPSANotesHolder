        // Your web app's Firebase configuration
        // Your web app's Firebase configuration
       // Your web app's Firebase configuration
       var firebaseConfig = {
        apiKey: "AIzaSyBNd_WN2V9QbNeCDGK6enQTeRpGQ7IXeHQ",
        authDomain: "notesholderr.firebaseapp.com",
        projectId: "notesholderr",
        storageBucket: "notesholderr.appspot.com",
        messagingSenderId: "394948414083",
        appId: "1:394948414083:web:bf5488eb1acbe5ef1769b6"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
        
        const auth =firebase.auth();
        
        // function RegisterUser() {
        
        //  }
        
        
        // function signin(){
        //   alert("signin");
         
        // }
        function signup(){
  
            var Name=document.getElementById('Name').value;
            var Email=document.getElementById('Email').value;
            var ClgName=document.getElementById('ClgName').value;
            var Password=document.getElementById('Password').value;
            var Cource=document.getElementById('Cource').value;
            var Semester=document.getElementById('Semester').value;
            // var Notespdf=document.getElementById('notespdf').value;
            var SubjectName=document.getElementById('SubjectName').value;
            firebase.auth().createUserWithEmailAndPassword(Email,Password).then(function(){
             // alert('User Register successfully');
             var id=firebase.auth().currentUser.uid;
             firebase.database().ref('User/'+Cource+'/'+Semester+'/'+SubjectName).set({
              Name:Name,
              Email:Email,
              ClgName:ClgName,
              password:Password,
              Cource:Cource,
              Semester:Semester,
              // Notespdf:Notespdf,
              SubjectName:SubjectName,
             });
            
               // Created a Storage Reference with root dir
      var storageRef = firebase.storage().ref();
      // Get the file from DOM
      var file = document.getElementById("files").files[0];
      console.log(file);
      
      //dynamically set reference to the file name
      var thisRef = storageRef.child('User/'+Cource+'/'+Semester+'/'+SubjectName+'/'+file.name);

      //put request upload file to firebase storage
      thisRef.put(file).then(function(snapshot) {
         alert("File Uploaded")
         console.log('Uploaded a blob or file!');
      });


          
          
            }).catch(function(error){
          
             var errorcode=error.code;
             var errormsg=error.message;
          
            });
            // alert("signup");
          
          }