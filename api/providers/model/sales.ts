export const salesTemplate = (data: any) => {
  return `
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:660px" role="presentation">
  <tbody>
      <tr>
          <td style="background-color:#ffffff;background-position:center;background-repeat:no-repeat;background-size:cover"
              class="mceWrapperInner" valign="top">
              <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation"
                  data-block-id="14">
                  <tbody>
                      <tr class="mceRow">
                          <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                              valign="top">
                              <table border="0" cellpadding="0" cellspacing="0" width="100%" role="presentation">
                                  <tbody>
                                      <tr>
                                          <td style="padding-top:0;padding-bottom:0" class="mceColumn"
                                              data-block-id="-4" valign="top" colspan="12" width="100%">
                                              <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                                  role="presentation">
                                                  <tbody>
                                                      <tr>
                                                          <td style="padding-top:48px;padding-bottom:12px;padding-right:24px;padding-left:24px"
                                                              class="mceBlockContainer" valign="top">
                                                              <div data-block-id="1" class="mceText"
                                                                  id="dataBlockId-1" style="width:100%">
                                                                  <p class="last-child"><br></p>
                                                              </div>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td style="background-color:transparent;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                              class="mceBlockContainer" valign="top">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  width="100%" style="background-color:transparent"
                                                                  role="presentation" data-block-id="2">
                                                                  <tbody>
                                                                      <tr>
                                                                          <td style="min-width:100%;border-top:20px solid transparent"
                                                                              valign="top"></td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td style="padding-top:12px;padding-bottom:12px;padding-right:48px;padding-left:48px"
                                                              class="mceBlockContainer" align="center" valign="top">
                                                              <img data-block-id="3" width="297" height="auto"
                                                                  style="width:297px;height:auto;max-width:297px !important;display:block"
                                                                  alt="Logo"
                                                                  src="https://mcusercontent.com/895ee1b5bfd383f1dab7d7767/images/6e7dac03-41e1-9f98-d3eb-2cb09f693f8e.png"
                                                                  class="mceLogo"></td>
                                                      </tr>
                                                      <tr>
                                                          <td style="background-color:transparent;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                              class="mceBlockContainer" valign="top">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  width="100%" style="background-color:transparent"
                                                                  role="presentation" data-block-id="4">
                                                                  <tbody>
                                                                      <tr>
                                                                          <td style="min-width:100%;border-top:20px solid transparent"
                                                                              valign="top"></td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td style="padding-top:12px;padding-bottom:12px;padding-right:24px;padding-left:24px"
                                                              class="mceBlockContainer" valign="top">
                                                              <div data-block-id="5" class="mceText"
                                                                  id="dataBlockId-5" style="width:100%">
                                                              </div>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td style="padding-top:12px;padding-bottom:12px;padding-right:24px;padding-left:24px"
                                                              class="mceBlockContainer" valign="top">
                                                              <div data-block-id="6" class="mceText"
                                                                  id="dataBlockId-6" style="width:100%">
                                                                  <h1 style="text-align: center; color:#473f57;">Serviço contratado com sucesso!</h1>
                                                                  <br/>
                                                                  <h2 style="text-align: center; color:#473f57;">Pagamento processado com sucesso.</h2>
                                                                  <p><br></p>
                                                                  <p><br></p>
                                                                  <p style="text-align: left;"><strong><span
                                                                              style="color:#473f57;">Informações do
                                                                              pedido:</span></strong></p>
                                                                  <p style="text-align: left;"><span
                                                                          style="color:#473f57;">Número do pedido: ${data?._id}
                                                                      </span></p>
                                                                  <p style="text-align: left;"><span
                                                                          style="color:#473f57;">Nome do serviço: ${data?.title}
                                                                      </span></p>
                                                                  <p style="text-align: left;"><span
                                                                          style="color:#473f57;">Descrição do serviço: ${data?.description}</span></p>
                                                                  <p style="text-align: left; color:#473f57;">Prazo para conclusão: ${data?.productId?.deliveryTime} dias</p>
                                                                  <p><br></p>
                                                                  <p style="text-align: left;"><strong><span
                                                                              style="color:#473f57;">Informações de
                                                                              contato:</span></strong></p>
                                                                  <p style="text-align: left;"><strong><span
                                                                              style="color:#473f57;">Freelancer:
                                                                          </span></strong></p>
                                                                  <p style="text-align: left;"><span
                                                                          style="color:#473f57;">Nome: ${data?.userId?.name}</span></p>
                                                                  <p style="text-align: left;"><span
                                                                          style="color:#473f57;">E-mail: ${data?.userId?.email}</span></p>
                                                                  <p style="text-align: left;"><span
                                                                          style="color:#473f57;">Telefone/Celular: ${data?.userId?.phone}</span></p>
                                                                  <p style="text-align: left;"><br></p>
                                                                  <p style="text-align: left;"><strong><span
                                                                              style="color:#473f57;">Cliente:
                                                                          </span></strong></p>
                                                                  <p style="text-align: left;color:#473f57;">Nome: ${data?.buyerId?.name}</p>
                                                                  <p style="text-align: left;color:#473f57;">E-mail: ${data?.buyerId?.email}</p>
                                                                  <p style="text-align: left;color:#473f57;">Telefone/Celular: ${data?.buyerId?.phone}</p>
                                                                  <p><br></p>
                                                                  <p><br></p>
                                                                  <p style="text-align: center;color:#473f57;">Obrigado por utilizar a nossa plataforma.</p>
                                                                  <p style="text-align: center;color:#473f57;">Você pode acessar a plataforma e enviar uma
                                                                      mensagem pelo nosso chat.</p>
                                                                  <p class="last-child"><br></p>
                                                              </div>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td style="padding-top:12px;padding-bottom:12px;padding-right:0;padding-left:0"
                                                              class="mceBlockContainer" align="center" valign="top">
                                                              <table align="center" border="0" cellpadding="0"
                                                                  cellspacing="0" role="presentation"
                                                                  data-block-id="7">
                                                                  <tbody>
                                                                      <tr class="mceStandardButton">
                                                                          <td style="background-color:#473f57;border-radius:0;text-align:center"
                                                                              class="mceButton" valign="top"><a
                                                                                  href="" target="_blank"
                                                                                  style="background-color:#473f57;border-radius:0;border:2px solid #000000;color:#ffffff;display:block;font-family:'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif;font-size:16px;font-weight:normal;font-style:normal;padding:16px 28px;text-decoration:none;min-width:30px;text-align:center;direction:ltr;letter-spacing:0px">Acessar</a>
                                                                          </td>
                                                                      </tr>
                                                                      <tr>
                                                                          <!--[if mso]>
                                                                            <td align="center">
                                                                            <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml"
                                                                            xmlns:w="urn:schemas-microsoft-com:office:word"
                                                                            href=""
                                                                            style="v-text-anchor:middle; width:117.8px; height:54px;"
                                                                            arcsize="0%"
                                                                            strokecolor="#000000"
                                                                            strokeweight="2px"
                                                                            fillcolor="#473f57">
                                                                            <v:stroke dashstyle="solid"/>
                                                                            <w:anchorlock />
                                                                            <center style="
                                                                            color: #ffffff;
                                                                            display: block;
                                                                            font-family: 'Helvetica Neue', Helvetica, Arial, Verdana, sans-serif;
                                                                            font-size: 16;
                                                                            font-style: normal;
                                                                            font-weight: normal;
                                                                            letter-spacing: 0px;
                                                                            text-decoration: none;
                                                                            text-align: center;
                                                                            direction: ltr;"
                                                                            >
                                                                            Acessar
                                                                            </center>
                                                                            </v:roundrect>
                                                                            </td>
                                                                            <![endif]-->
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td style="background-color:transparent;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0"
                                                              class="mceBlockContainer" valign="top">
                                                              <table border="0" cellpadding="0" cellspacing="0"
                                                                  width="100%" style="background-color:transparent"
                                                                  role="presentation" data-block-id="8">
                                                                  <tbody>
                                                                      <tr>
                                                                          <td style="min-width:100%;border-top:20px solid transparent"
                                                                              valign="top"></td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                      <tr>
                                                          <td style="padding-top:8px;padding-bottom:8px;padding-right:8px;padding-left:8px"
                                                              class="mceLayoutContainer" valign="top">
                                                              <table align="center" border="0" cellpadding="0"
                                                                  cellspacing="0" width="100%" role="presentation"
                                                                  data-block-id="13"
                                                                  id="section_f842481fb8b83ee72b4d9bae58ff6ebb"
                                                                  class="mceFooterSection">
                                                                  <tbody>
                                                                      <tr class="mceRow">
                                                                          <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                              valign="top">
                                                                              <table border="0" cellpadding="0"
                                                                                  cellspacing="12" width="100%"
                                                                                  role="presentation">
                                                                                  <tbody>
                                                                                      <tr>
                                                                                          <td style="padding-top:0;padding-bottom:0;margin-bottom:12px"
                                                                                              class="mceColumn"
                                                                                              data-block-id="-3"
                                                                                              valign="top"
                                                                                              colspan="12"
                                                                                              width="100%">
                                                                                              <table border="0"
                                                                                                  cellpadding="0"
                                                                                                  cellspacing="0"
                                                                                                  width="100%"
                                                                                                  role="presentation">
                                                                                                  <tbody>
                                                                                                      <tr>
                                                                                                          <td style="padding-top:12px;padding-bottom:12px;padding-right:16px;padding-left:16px"
                                                                                                              class="mceBlockContainer"
                                                                                                              align="center"
                                                                                                              valign="top">
                                                                                                              <div data-block-id="11"
                                                                                                                  class="mceText"
                                                                                                                  id="dataBlockId-11"
                                                                                                                  style="display:inline-block;width:100%">
                                                                                                                  <p
                                                                                                                      class="last-child">
                                                                                                                      <em><span
                                                                                                                              style="font-size: 12px">Copyright
                                                                                                                              (C)
                                                                                                                              *|2024|*
                                                                                                                              *|Freelancer|*.<br>Todos
                                                                                                                              os
                                                                                                                              direitos
                                                                                                                              reservados.</span></em><br><br><span
                                                                                                                          style="font-size: 12px">Quer
                                                                                                                          mudar
                                                                                                                          como
                                                                                                                          você
                                                                                                                          recebe
                                                                                                                          esses
                                                                                                                          e-mails?</span><br><span
                                                                                                                          style="font-size: 12px">Você
                                                                                                                          pode
                                                                                                                      </span><a
                                                                                                                          href="https://gmail.us12.list-manage.com/profile?u=895ee1b5bfd383f1dab7d7767&amp;id=4fe2d69f3f&amp;e=[UNIQID]&amp;c=1431475411"><span
                                                                                                                              style="font-size: 12px">atualizar
                                                                                                                              suas
                                                                                                                              preferências</span></a><span
                                                                                                                          style="font-size: 12px">
                                                                                                                          ou
                                                                                                                      </span><a
                                                                                                                          href="https://gmail.us12.list-manage.com/unsubscribe?u=895ee1b5bfd383f1dab7d7767&amp;id=4fe2d69f3f&amp;t=b&amp;e=[UNIQID]&amp;c=1431475411"><span
                                                                                                                              style="font-size: 12px">cancelar
                                                                                                                              a
                                                                                                                              assinatura</span></a>
                                                                                                                  </p>
                                                                                                              </div>
                                                                                                          </td>
                                                                                                      </tr>
                                                                                                      <tr>
                                                                                                          <td class="mceLayoutContainer"
                                                                                                              align="center"
                                                                                                              valign="top">
                                                                                                              <table
                                                                                                                  align="center"
                                                                                                                  border="0"
                                                                                                                  cellpadding="0"
                                                                                                                  cellspacing="0"
                                                                                                                  width="100%"
                                                                                                                  role="presentation"
                                                                                                                  data-block-id="-2">
                                                                                                                  <tbody>
                                                                                                                      <tr
                                                                                                                          class="mceRow">
                                                                                                                          <td style="background-position:center;background-repeat:no-repeat;background-size:cover"
                                                                                                                              valign="top">
                                                                                                                          </td>
                                                                                                                      </tr>
                                                                                                                  </tbody>
                                                                                                              </table>
                                                                                                          </td>
                                                                                                      </tr>
                                                                                                  </tbody>
                                                                                              </table>
                                                                                          </td>
                                                                                      </tr>
                                                                                  </tbody>
                                                                              </table>
                                                                          </td>
                                                                      </tr>
                                                                  </tbody>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </tbody>
                                              </table>
                                          </td>
                                      </tr>
                                  </tbody>
                              </table>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </td>
      </tr>
  </tbody>
</table>`
}
