import axios from 'axios'
/** lib usada para animar a chamada */
import ora from 'ora'

/**
 * @description Exemplo de envio de mensagem simples
 */
const sendMessage = async (instanceAPI, phone, message) => {
  try {
    const spinner = ora('Enviando mensagem para a API').start();
    await axios.post(instanceAPI, { phone, message })
    spinner.succeed('Mensagem enviada a fila de envios, deve chegar em breve.')
  } catch (e) {
    console.log('error=>', e.message);
    spinner.fail('Problemas ao enviar mensagem.')
  }
}

export { sendMessage }