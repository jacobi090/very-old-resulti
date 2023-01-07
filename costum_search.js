function onLoad() {
  var customSearchControl = new google.search.CustomSearchControl('b2eb70a2649874cc6');
  customSearchControl.setNoTracking(true);
  customSearchControl.draw('cse');
}

google.setOnLoadCallback(onLoad);
