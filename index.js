const providers = ["circleCI", "harness", "github_actions"];
const machineTypes = [
  "Linux_4_cores",
  "Linux_8_cores",
  "Linux_16_cores",
  "Linux_32_cores",
  "Windows_4_cores",
  "macOS_M1_6_cores",
];

let machineType = "Linux_4_cores";
let provider = "github_actions";

let machine_cost_per_mins;

let harness_cost;
let circleCI_cost;
let github_actions_cost;

let harness_cost_per_mins;
let circleCI_cost_per_mins;
let github_actions_cost_per_mins;

let harness_saving_percentage;
let harness_saving;

let number_of_builds_per_week = 100;
let avg_build_time = 15;

let weekly_build_minutes;

switch (machineType) {
  case "Linux_4_cores":
    harness_cost_per_mins = 0.01;
    circleCI_cost_per_mins = 0.012;
    github_actions_cost_per_mins = 0.016;
    harness_saving_percentage = 0.3;

    break;

  case "Linux_8_cores":
    harness_cost_per_mins = 0.025;
    circleCI_cost_per_mins = 0.06;
    github_actions_cost_per_mins = 0.032;
    harness_saving_percentage = 0.3;

    break;
  case "Linux_16_cores":
    harness_cost_per_mins = 0.05;
    circleCI_cost_per_mins = 0.012;
    github_actions_cost_per_mins = 0.064;
    harness_saving_percentage = 0.3;

    break;
  case "Linux_32_cores":
    harness_cost_per_mins = 0.1;
    circleCI_cost_per_mins = 0.18;
    github_actions_cost_per_mins = 0.128;
    harness_saving_percentage = 0.3;

    break;

  default:
    break;
}

console.log("machine", machineType);

console.log("harness_cost_per_mins", harness_cost_per_mins);
console.log("circleCI_cost_per_mins", circleCI_cost_per_mins);
console.log("github_actions_cost_per_mins", github_actions_cost_per_mins);
console.log("harness_saving_percentage", harness_saving_percentage);

weekly_build_minutes = number_of_builds_per_week * avg_build_time * 52;
harness_cost = weekly_build_minutes * harness_cost_per_mins;
// harness_saving = harness_saving_percentage * harness_cost

switch (provider) {
  case "circleCI":
    weekly_build_minutes = number_of_builds_per_week * avg_build_time * 52;
    circleCI_cost = weekly_build_minutes * circleCI_cost_per_mins;
    // harness_saving = harness_saving_percentage * circleCI_cost;

    harness_saving = circleCI_cost - harness_cost;
    break;

  case "github_actions":
    weekly_build_minutes = number_of_builds_per_week * avg_build_time * 52;
    github_actions_cost = weekly_build_minutes * github_actions_cost_per_mins;
    // harness_saving = harness_saving_percentage * github_actions_cost;

    harness_saving = github_actions_cost - harness_cost;
    break;

  default:
    break;
}
console.log("number_of_builds_per_week", number_of_builds_per_week);
console.log("avg_build_time", avg_build_time);
console.log("weekly_build_minutes", weekly_build_minutes);
console.log("circleCI_cost", circleCI_cost);
console.log("harness_cost", harness_cost);
console.log("github_actions_cost", github_actions_cost);
console.log(harness_saving, harness_saving);
