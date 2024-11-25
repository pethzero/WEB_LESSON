function format_Percent(per_kit, count_kit)
{
  let text = null;
  let percent = 100;
  if (
    (per_kit == 0 || per_kit == null || per_kit == undefined) &&
    (count_kit == 0 || count_kit == null || count_kit == undefined)
  ) {
    text = "100%";
  }
  return {
    text: text,
    color: this.getColor(percent),
  };
}


function getColor(percent) {
    if (percent < 50) {
      return 'rgb(167, 43, 43)';
    } else if (percent >= 50 && percent < 90) {
      return 'rgb(192, 164, 5)';
    } else if (percent >= 90 && percent < 100) {
      return 'rgb(103, 235, 91)';
    } else {
      return 'rgb(12, 148, 0)';
    }
  }

console.log(format_Percent(0, 0));
console.log(format_Percent(null, 0));
console.log(format_Percent(null, null));
