<?php
include_once("./config.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Buildela - Home</title>
  <!-- ------CSS Linking------ -->
  <link rel="stylesheet" href="<?= BASE_URL; ?>/assets/css/style.css">
  <link rel="stylesheet" href="/assets/css/responsive.css">
  <!-- -----Font Awesome Linking------ -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2//assets/css/all.min.css"/>
  <!-- -----Favicon----- -->
  <link rel="shortcut icon" href="images/shape.png" type="image/x-icon">
</head>
<body>
 <?php include_once("./layout/header.php"); ?>
  <!-- ----------Header Finish----------- -->

<!-- --------Page-2---------- -->
  <section id="how-does-it-work">

      <div class="title">
        <div class="top">
          <div class="ready-services">
            <h3>
              <i class="fa-brands fa-whatsapp"></i>
              Over 50 services
            </h3>
            <h3>Ready to help you anytime!</h3>
          </div>
        </div>
        <h2>How does it work?</h2>
        <p>It’s as easy as three steps to follow and get your home fixed in a matter of hours!</p>
      </div>

      <div class="container">
        <div class="contents">
            <div class="content content-1">
              <i class="fa-solid fa-square-plus icon"></i>
              <h4>Post a free job</h3>
              <p class="text">Tell us about your job, and we'll alert suitable tradespeople in your area. It’s simple & free.</p>

              <div class="welcome-msg">
                <div class="msg-top">
                  <img src="images/shape.png">
                  <div class="text">
                    <h3>Hey Martha</h3>
                    <p>Welcome Back</p>
                  </div>
                </div>
                <h2>I need to fix my boiler...</h2>
                <button type="button">Post Job</button>
              </div>
              <div class="img">
                <img src="http://dev-buildela.com/public/img/Build.png" alt="">
              </div>
            </div>
            <div class="content content-2">
              <i class="fa-solid fa-user-plus icon"></i>
              <h4>Tradespeople respond</h3>
              <p class="text">Once your job is posted, you'll get responses from interested tradespeople.</p>

              <div class="offers">
                <div class="arrow">
                  <i class="fa-solid fa-arrow-right-long"></i>
                </div>
                <div class="text">
                  <h3>18 offers by tradespeople</h3>
                  <p>View offers and profiles</p>
                </div>
                <a href="#"><i class="fa-solid fa-chevron-right"></i></a>
              </div>

              <div class="verified-persons">
                <i class="fa-solid fa-plus"></i>
                <div class="person person-1">
                  <div class="verified">
                    <i class="fa-solid fa-certificate"></i>
                  </div>
                </div>
                <div class="person person-2">
                  <div class="verified">
                    <i class="fa-solid fa-certificate"></i>
                  </div>
                </div>
                <div class="person person-1">
                  <div class="verified">
                    <i class="fa-solid fa-certificate"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="content content-3">
              <i class="fa-solid fa-circle-check icon"></i>
              <h4>Review and choose</h3>
              <p class="text">Browse profiles, work history, and feedback, then choose who you wish to hire.</p>
              
              <div class="conversation">
                <div class="msg-1">
                  <i class="fa-solid fa-user"></i>
                  <div class="text">
                    <h2>John Mendis</h2>
                    <p>Hey Olivia, can you please review the ofer I sent for fixing boiler?</p>
                  </div>
                </div>
                <div class="msg-2">
                  <h2>You</h2>
                  <p>Yes, I would like to book with you!</p>
                </div>
              </div>
            </div>
        </div>
      </div>
  </section>
  <?php include_once("./layout/footer.php"); ?>
<!-- ------Page-3------------ -->
  <section id="top-category">
    
    <div class="title">
      <div class="top">
        <div class="ready-services">
          <h3>
            <i class="fa-brands fa-whatsapp"></i>
            Over 50 services
          </h3>
          <h3>Ready to help you anytime!</h3>
        </div>
      </div>
      <h2>Our top categories</h2>
      <p>Check out our top categories people use everyday to get their work done!</p>
    </div>
    
    <div class="container">
      <div class="categories">

        <div class="item">
          <i class="fa-solid fa-wand-magic-sparkles"></i>
          <h3>Plumber</h3>
        </div>

        <div class="item">
          <i class="fa-solid fa-palette"></i>
          <h3>Electrician</h3>
        </div>

        <div class="item">
          <i class="fa-regular fa-handshake"></i>
          <h3>Roofer</h3>
        </div>

        <div class="item">
          <i class="fa-solid fa-bath"></i>
          <h3>Gardener</h3>
        </div>

        <div class="item">
          <i class="fa-brands fa-shopify"></i>
          <h3>Painter</h3>
        </div>

        <div class="item">
          <i class="fa-solid fa-brush"></i>
          <h3>Builder </h3>
        </div>

        <div class="item">
          <i class="fa-solid fa-wifi"></i>
          <h3>Landscraper</h3>
        </div>

        <div class="item">
          <i class="fa-brands fa-dropbox"></i>
          <h3>Carpenter</h3>
        </div>

        <div class="item">
          <i class="fa-brands fa-stack-overflow"></i>
          <h3>Plasterer</h3>
        </div>

        <div class="item">
          <i class="fa-brands fa-paypal"></i>
          <h3>Driveway</h3>
        </div>

        <div class="item">
          <i class="fa-solid fa-gear"></i>
          <h3>Fencing </h3>
        </div>

        <div class="item">
          <i class="fa-brands fa-algolia"></i>
          <h3>Handyman</h3>
        </div>

        <div class="item">
          <i class="fa-solid fa-mug-hot"></i>
          <h3>Locksmith</h3>
        </div>

        <div class="item">
          <i class="fa-solid fa-bolt"></i>
          <h3>Bathrooms</h3>
        </div>

        <div class="item">
          <i class="fa-brands fa-figma"></i>
          <h3>Tiler </h3>
        </div>

        <div class="item">
          <i class="fa-brands fa-slack"></i>
          <h3>Heating</h3>
        </div>

        <div class="item">
          <i class="fa-regular fa-comment"></i>
          <h3>Boilers</h3>
        </div>
      </div>
      <div class="button">
        <button class="btn"><i class="fa-solid fa-square-plus"></i> Post a free job</button>
    </div>
      </div>
  </section>




  <!-- -----------Js Linking------- -->
  <script src="app.js"></script>
</body>
</html>