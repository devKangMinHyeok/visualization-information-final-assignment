const formatDate = (date: Date) => {
  date = new Date(date);
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2); // 월은 0부터 시작하기 때문에 1을 더해주고, 항상 2자리 숫자를 유지하기 위해 slice를 사용합니다.
  var day = ("0" + date.getDate()).slice(-2); // 날짜 역시 항상 2자리 숫자를 유지하기 위해 slice를 사용합니다.

  return year + "-" + month + "-" + day;
};

export default formatDate;
