<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>slideDown demo</title>
  <style>
  div {
    background: #de9a44;
    margin: 3px;
    width: 80px;
    height: 40px;
    display: none;
    float: left;
  }
  </style>
  <script src="https://code.jquery.com/jquery-3.7.0.js"></script>
</head>
<body>
 
Click me!
<div></div>
<div></div>
<div></div>
 
<script>
$( document.body ).on( "click", function () {
  if ( $( "div" ).first().is( ":hidden" ) ) {
    $( "div" ).slideDown( "slow" );
  } else {
    $( "div" ).hide();
  }
} );
</script>
 
</body>
</html>