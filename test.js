function do1() {
 conf1 = confirm("Do you want to download this?")
  if (conf1) {
console.log("Downloaded file")
    do2()
  } else {console.log("download Canceled")}
}
function do2() {
  console.log("do2 success")
}
