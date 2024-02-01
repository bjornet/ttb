import inquirer from 'inquirer';

export const input = async (message: string) => {
  const questions = [
    {
      type: 'input',
      name: 'value',
      message,
    },
  ];

  const answers = await inquirer.prompt(questions);

  return answers.value;
};
