var header = "<header class='bg-dark text-center p-1 martop' style='position:fixed; top:0; width: 100%; z-index: 1;'><h1 class='titleclass'><a href='index.html' class='title'>Covid Kids</a></h1><h1 class='title1 unselectable' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'><svg class='bi bi-three-dots-vertical' width='1em' height='1em' viewBox='0 0 16 16' fill='currentColor' xmlns='http://www.w3.org/2000/svg'><path fill-rule='evenodd' d='M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z'></svg></h1><div class='dropdown-menu' aria-labelledby='dropdownMenuButton'><a class='dropdown-item' href='index.html'>Home</a><a class='dropdown-item' href='videos.html'>Videos</a><a class='dropdown-item' href='articles.html'>Articles</a><a class='dropdown-item' href='artwork.html'>Artwork</a><a class='dropdown-item' href='mobilegame.html'>Game</a><a class='dropdown-item' href='feedback.html'>Contact</a><a class='dropdown-item' href='credits.html'>Credits</a></div></header><div class='modal fade text-dark' id='feedbackpopup' tabindex='-1' role='dialog' aria-labelledby='feedbackpopupLabel' aria-hidden='true'><div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'><h5 class='modal-title' id='contactLabel'>What do you think?</h5><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>x</span></button></div><div class='modal-body'><center><p>Any suggestions for improvements to the site? Please enter the here. You can also email us at <a href='mailto:info@covidkidsonline.com' class='text-dark'>info@covidkidsonline.com</a></p><br><br><form action='https://ilan-not-elon.com/Covid-Kids/feedback_popup.php' method='POST'><textarea id='input' type='text' name='message' class='mb-2 input textarea'></textarea><br></center></div><div class='modal-footer'><input type='submit' value='Submit' class='btn btn-dark'></input></div></form></div></div></div>";
document.write(header);