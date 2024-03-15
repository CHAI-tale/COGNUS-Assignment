document.addEventListener("DOMContentLoaded", function () {
  var monthlyAmount = document.getElementById("monthlyAmount");
  var monthlyAmountValue = document.getElementById("monthlyAmountValue");
  monthlyAmountValue.innerHTML = "Rs " + monthlyAmount.value;

  monthlyAmount.oninput = function () {
    monthlyAmountValue.innerHTML = "Rs " + this.value;
  };

  var expectedGain = document.getElementById("expectedGain");
  var expectedGainValue = document.getElementById("expectedGainValue");
  expectedGainValue.innerHTML = expectedGain.value + "%";

  expectedGain.oninput = function () {
    expectedGainValue.innerHTML = this.value + "%";
  };

  var sipTenure = document.getElementById("sipTenure");
  var sipTenureValue = document.getElementById("sipTenureValue");
  sipTenureValue.innerHTML = sipTenure.value + " months";

  sipTenure.oninput = function () {
    sipTenureValue.innerHTML = this.value + " months";
  };
});
