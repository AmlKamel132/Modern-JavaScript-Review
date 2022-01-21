/**
 * destruct and named args
 */
function courseDetails({
  name = "Es6",
  duration = "3 weeks",
  supervisior = "aml",
} = {}) {
  console.log(`course details name : ${name} , duration: ${duration} , supervisior: ${supervisior}`);
}

courseDetails({ name: "aaa", duration: "2 weeks" });
