import inquirer from "inquirer";

export const select = async (message: string, choices: string[]) => {
  const questions = [
    {
      type: "list",
      name: "value",
      message,
      choices,
      default: choices[0],
    },
  ];

  const answers = await inquirer.prompt(questions);

  return answers.value;
};
