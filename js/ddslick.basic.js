$(function() {

var ddData = [
    {
        text: "Facebook",
        value: 1,
        selected: false,
        description: "Description with Facebook",
        imageSrc: "http://i.imgur.com/aj3SG8P.png"
    },
    {
        text: "Twitter",
        value: 2,
        selected: false,
        description: "Description with Twitter",
        imageSrc: "http://i.imgur.com/apMPnBu.png"
    },
    {
        text: "LinkedIn",
        value: 3,
        selected: true,
        description: "Description with LinkedIn",
        imageSrc: "http://i.imgur.com/z57npO7.png"
    },
    {
        text: "Google",
        value: 4,
        selected: false,
        description: "Description with Google",
        imageSrc: "http://i.imgur.com/0kx2yP2.png"
    }
];

$('#myDropdown').ddslick({
    data:ddData,
    width:300,
    selectText: "Select your preferred social network",
    imagePosition:"left",
    onSelected: function(selectedData){
        //callback function: do something with selectedData;
    }   
});

	
});
