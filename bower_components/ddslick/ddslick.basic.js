$(function() {

var ddData = [
    {
        text: "Facebook",
        value: 1,
        selected: false,
        description: "Description with Facebook",
        imageSrc: "img/facebook.png"
    },
    {
        text: "Twitter",
        value: 2,
        selected: false,
        description: "Description with Twitter",
        imageSrc: "img/twitter.png"
    },
    {
        text: "LinkedIn",
        value: 3,
        selected: true,
        description: "Description with LinkedIn",
        imageSrc: "img/linkedin.png"
    },
    {
        text: "Google",
        value: 4,
        selected: false,
        description: "Description with Google",
        imageSrc: "img/google.png"
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
