//Console.log out elements in JSON file
let video= [{
    id: 12312412312,
    name: "Ecuaciones Diferenciales",
    url: "/video/math/edo/12312412312",
    author: {
    name_author:"Alejandro Morales",
    url: "/author/alejandro-morales",
    type: "master"
    }
}]

for (var i= 0; i<video.length; i++){
    console.log(video[i].id);
    console.log(video[i].name);
    console.log(video[i].url);
    console.log(video[i].author);
    
};

