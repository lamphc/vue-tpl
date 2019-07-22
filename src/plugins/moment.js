// dayjs-2kb rp comment
import Vue from "vue";
import moment from "dayjs";
const formats = {
  date: "YYYY-MM-DD",
  datetime: "YYYY-MM-DD hh:mm:ss"
};
Vue.filter("moment", function (value, format = "date") {
  if (!value) {
    return null;
  }
  const pattern = formats[format];
  return moment(value).format(pattern);
});
