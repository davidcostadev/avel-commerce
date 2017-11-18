import axios from 'axios'

async function Url(query) {
  console.log(new Date(), 'Api Url');

  const slug = []

  if (query.family) {
    slug.push(query.family)
  }
  if (query.group) {
    slug.push(query.group)
  }
  if (query.subgroup) {
    slug.push(query.subgroup)
  }

  const data = JSON.stringify({
    PE_PASSKEY: 'c9b3c80c2ed263f967a4b455c6eb7d51',
    PE_IP: '127.0.0.1',
    PE_SESSAO: 'asdfgh',
    PE_ID_CLIENTE: null,
    PE_PAGENAME: slug.join('/')
  });

  const response = await axios.post('http://186.202.64.106:8000/datasnap/rest/Tsvmwebsite/sp_website_url_sel', data);

  return response.data.result[0].PS_TABELA_INFO[0]
}

export default Url
