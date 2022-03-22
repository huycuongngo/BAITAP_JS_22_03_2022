

// bai 1
// tim so nguyen duong nho nhat sao cho
// 1 + 2 + n + ... > 10000
var sum = 0;
var i = 0;
while (true) {
  if (sum > 10000) {
    console.log(i);
    console.log(sum);
    break;
  }
  i++;
  sum += i;
}


// bai 2
// nhap x, n. Tinh tong x^1 + x^2 +...+x^n
document.getElementById("btn-submit").addEventListener("click", () => {
  var x = document.getElementById("txt-x").value * 1;
  var n = document.getElementById("txt-n").value * 1;

  console.log(x);
  console.log(n);

  var sum = 0;
  for (let i = 1; i <= n; ++i) {
    sum += x ** i;
  }
  console.log(sum);
  document.getElementById("result").innerText = sum;
});


// bai 3
document.getElementById("btn-submit3").addEventListener("click", () => {
  var n = document.getElementById("txt-n3").value * 1;
  // console.log(n);

  var result = 1;
  for (let i = 1; i <= n; ++i) {
    result = result * i;
    console.log("i", i);
    console.log("result", result);
  }
  console.log("result cuoi cung", result);
  document.getElementById("result3").innerText = result;

});



// bai 4
var i = 0;
document.getElementById("btn-submit4").addEventListener("click", () => {
  while (i < 10) {
    i++;
    if (i % 2 == 0) {
      console.log("chan", i);
      document.getElementById(`result4.${i}`).innerHTML = `<div style="background: red;">Content${i}</div>`;
    } else {
      console.log("le", i);
      document.getElementById(`result4.${i}`).innerHTML = `<div style="background: blue;">Content${i}</div>`;
    }
  }
});


// bai 5
document.getElementById("btn-submit5").addEventListener("click", () => {
  console.log("bai tap 5....");
  var n = document.getElementById("txt-n5").value * 1;
  console.log(n);

  var myArray = [];

  for (let i = 1; i <= n; ++i) {
    myArray.push(i);
  }
  document.getElementById("result5").innerText = myArray.toString();
});
