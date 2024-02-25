#!/bin/bash

set -e

mongo <<EOF
use admin
db.createUser(
  {
    user: ${MONGO_USER},
    pwd: ${MONGO_PASS},
    roles: [ { role: "userAdminAnyDatabase", db: "admin" }, "readWriteAnyDatabase" ]
  }
)
  
use ${MONGO_DB_NAME}

db.createCollection("userschemas")
db.userschemas.insert([
  {
    _id: ObjectId("65883a7bc89918015e25e52f"),
    name: "Admin",
    username: "admin",
    email: "danielbarboza56@hotmail.com",
    cpf: "999.111.333-33",
    birthDate: "2000-03-01T05:36:40.303Z",
    picture: "files-1704052453987.jpg",
    country: "brasil",
    phone: "(21)99999-9999",
    description: "admin",
    permissions: ["admin"],
    hash: "deef7bdadf03d364e3137177a6753fa7c8495a712b79d2985ae9bf64cc803341fe43214da892e1b1a73b056a387cb67e48f1c546c6e3a70a75c9e62971ec804d3c44ce9a492b2f92db4bd4c1a6b3d0aea910cfef8d2a6678063867e7c1f391a4394ab42acbc3c57b6d2aca1701f32e629075636cff55a54f767be5184e9c38a3a14118afba5de1b12421d289c089b0d93d5c4d6fdc254d9d2c420ea917ac6a3bc45170ae3ddfbcae92e419b33c2615b7365f40e41d7e6b854434ed20070d4d1d5bcbf1d65ac90727e15021b95c1b3e5c21de5bda887ad8ffe620930345f3bff6b2edb9b78f0ae336e7a3ed28d8894d8b42e726b299d373a2e1f0464991452dacfe6d3a958d00fa6b24df9700896b626398703fd09cbc4e71c5ac90c7d421734f6bcf29fac193b3f07451ea03df18f5c918f45f43aba511732c42096f3155b7115ebd50b259d66cebbfa4bc104ed4afa1b43b73f07a84712df352eb0f34ad5fbdf642b17d7f9eac26fde6ed2977c729d15770e2c3553b3315abdcfd0b7ec9578328968ec4c1cdd2418297c315b60ece3ef7a37eca05910dd20a42b910ae674674bcba0b82be9858c18346c3a37ae999fdd1f20355417cdea5feae79b7eaab6002bdd347fc91636c33146b1bddf1916b8d6db6e83f6843087dfd7a6d76fae1a1786e03feb417c9770b0b5f1bb83d94212b0121f309d94e63e805ee0428f66265d7",
    salt: "863bcb4b4e5f4469f0545ef9edbf71fb",
    isSeller: false,
    createdAt: "2023-01-28T06:39:34.330+00:00"
  },
  {
    _id: ObjectId("65a5002f9d9b340e62d233b4"),
    name: "Marcos Junior",
    username: "marcos123",
    email: "danielbarboza58@hotmail.com",
    cpf: "222.444.555-11",
    birthDate: "2000-03-01T05:36:40.303Z",
    picture: "files-1704052453987.jpg",
    country: "brasil",
    phone: "(21)99999-9999",
    description: "cliente",
    permissions: ["client"],
    hash: "deef7bdadf03d364e3137177a6753fa7c8495a712b79d2985ae9bf64cc803341fe43214da892e1b1a73b056a387cb67e48f1c546c6e3a70a75c9e62971ec804d3c44ce9a492b2f92db4bd4c1a6b3d0aea910cfef8d2a6678063867e7c1f391a4394ab42acbc3c57b6d2aca1701f32e629075636cff55a54f767be5184e9c38a3a14118afba5de1b12421d289c089b0d93d5c4d6fdc254d9d2c420ea917ac6a3bc45170ae3ddfbcae92e419b33c2615b7365f40e41d7e6b854434ed20070d4d1d5bcbf1d65ac90727e15021b95c1b3e5c21de5bda887ad8ffe620930345f3bff6b2edb9b78f0ae336e7a3ed28d8894d8b42e726b299d373a2e1f0464991452dacfe6d3a958d00fa6b24df9700896b626398703fd09cbc4e71c5ac90c7d421734f6bcf29fac193b3f07451ea03df18f5c918f45f43aba511732c42096f3155b7115ebd50b259d66cebbfa4bc104ed4afa1b43b73f07a84712df352eb0f34ad5fbdf642b17d7f9eac26fde6ed2977c729d15770e2c3553b3315abdcfd0b7ec9578328968ec4c1cdd2418297c315b60ece3ef7a37eca05910dd20a42b910ae674674bcba0b82be9858c18346c3a37ae999fdd1f20355417cdea5feae79b7eaab6002bdd347fc91636c33146b1bddf1916b8d6db6e83f6843087dfd7a6d76fae1a1786e03feb417c9770b0b5f1bb83d94212b0121f309d94e63e805ee0428f66265d7",
    salt: "863bcb4b4e5f4469f0545ef9edbf71fb",
    isSeller: false,
    createdAt: "2020-01-28T06:39:34.330+00:00"
  },
  {
    _id: ObjectId("65883a7bc89918015e25e52e"),
    name: "Daniel Silva",
    username: "daniel123",
    email: "daniel80barboza@gmail.com",
    cpf: "333.333.333-33",
    birthDate: "2000-03-01T05:36:40.303Z",
    picture: "files-1704052453988.jpg",
    country: "brasil",
    phone: "(21)99999-9999",
    description: "Escritor, Tradutor, Redator, Especialista em SEO, Gestor de Tráfego e Marketing Digital.",
    permissions: ["freelancer"],
    hash: "deef7bdadf03d364e3137177a6753fa7c8495a712b79d2985ae9bf64cc803341fe43214da892e1b1a73b056a387cb67e48f1c546c6e3a70a75c9e62971ec804d3c44ce9a492b2f92db4bd4c1a6b3d0aea910cfef8d2a6678063867e7c1f391a4394ab42acbc3c57b6d2aca1701f32e629075636cff55a54f767be5184e9c38a3a14118afba5de1b12421d289c089b0d93d5c4d6fdc254d9d2c420ea917ac6a3bc45170ae3ddfbcae92e419b33c2615b7365f40e41d7e6b854434ed20070d4d1d5bcbf1d65ac90727e15021b95c1b3e5c21de5bda887ad8ffe620930345f3bff6b2edb9b78f0ae336e7a3ed28d8894d8b42e726b299d373a2e1f0464991452dacfe6d3a958d00fa6b24df9700896b626398703fd09cbc4e71c5ac90c7d421734f6bcf29fac193b3f07451ea03df18f5c918f45f43aba511732c42096f3155b7115ebd50b259d66cebbfa4bc104ed4afa1b43b73f07a84712df352eb0f34ad5fbdf642b17d7f9eac26fde6ed2977c729d15770e2c3553b3315abdcfd0b7ec9578328968ec4c1cdd2418297c315b60ece3ef7a37eca05910dd20a42b910ae674674bcba0b82be9858c18346c3a37ae999fdd1f20355417cdea5feae79b7eaab6002bdd347fc91636c33146b1bddf1916b8d6db6e83f6843087dfd7a6d76fae1a1786e03feb417c9770b0b5f1bb83d94212b0121f309d94e63e805ee0428f66265d7",
    salt: "863bcb4b4e5f4469f0545ef9edbf71fb",
    isSeller: true,
    createdAt: "2021-01-28T06:39:34.330+00:00"
  },
  {
    _id: ObjectId("65883ab3c89918015e25e532"),
    name: "Daniel Barboza",
    username: "daniel098",
    email: "daniel95barboza@gmail.com",
    cpf: "111.222.333-33",
    birthDate: "2001-03-01T05:36:40.404Z",
    picture: "files-1704052453989.jpg",
    country: "brasil",
    phone: "(21)99999-9999",
    description: "Sou graduado em Tecnologia da informação, com mais de 10 anos de experiência no desenvolvimento de sistemas.",
    permissions: ["freelancer"],
    hash: "d827891175fabfa8c46b5da4e78d4e18d4d13cb9436bd39ea829be4c661b727b8f07c7d81c8f4d046ac33b2d3b588114d214d3f3b906dad9dd147a15bef04e78134b70c1a40de68226463c4d6a06816a8f2ff9a2c908493a6d12dbd7e4e6f074f7acc762cd75458d82e0cc140f03242e5057397902bc3aa4eab4cd50e1ef395d1c965d04bfe668e8a73a5abd3067f2608b33bad41caf0c31144810b6fb00362e5442d89662658cc0ad84305f4ac87e54c231b65d75c06a59da9aa6c4381c53ab6c4035a601d5e953720c2965ee4c6ec2aa1560009d648fe46ce479f4061dd6628cf01356946605a1e01935a4c98a079e80f3935556ef4491d31fe0a9cb02efc1aa7cb6b8d4009e27a87b3b18d6d0113c2ba28a8de2c8f82379eedecb3b37d8e8064c5c8c25241fb73d80a365ae64ab518b82709120019a170fcc4be1a48b31d8482517d94319b6d395c830cdada31c602a3c0fd7fdcd90339933db1a6e5e4ee917564dc6f8268df6dc324f60c7bdf0dd2ce5f5ec8600475a960e82103613e8df55f7e15424e547a673e3a5f4faa1ccd4f201d9ec0dbb883e020dd5fd6b63fffcca5c5eb7fdfc4a5b30f0258313197292214c3bea36295fda5429e1703b41ce3d7977167859596a518772eeb4bb0be38553371ca5c3cec1f5e7392edced3faf3971f48cf4e59f24b37037b5180e036d3e74ce22d99be3cceafd0cea3b2ddfe5cf",
    salt: "a9a28c74479228ffc02a7da3ca80ccdc",
    isSeller: true,
    createdAt: "2022-01-28T06:39:34.330+00:00"
  }
])

db.createCollection("conversationschemas")
db.conversationschemas.insert([
  {
    _id: ObjectId("658951d2e4e3a44b66725296"),
    id: "65883a7bc89918015e25e52e65a5002f9d9b340e62d233b4",
    sellerId: ObjectId("65883ab3c89918015e25e532"),
    buyerId: ObjectId("65a5002f9d9b340e62d233b4"),
    readBySeller: false,
    readByBuyer: false,
    lastMessage: "Ok, obrigado!",
  }
])

db.createCollection("categoryschemas")
db.categoryschemas.insert([
  {
    _id: ObjectId("6591ac0ef9877e3170d90c3e"),
    name: "Desenhar website",
    description: "Desenhar o seu website",
    picture: "files-1704052453986.jpg"
  },
  {
    _id: ObjectId("6591ac25f9877e3170d90c40"),
    name: "Escrever conteúdo",
    description: "Escrever o seu conteúdo",
    picture: "files-1704052453982.jpg"
  },
  {
    _id: ObjectId("6591ac32f9877e3170d90c42"),
    name: "Melhorar SEO",
    description: "Melhorar o seu SEO",
    picture: "files-1704052453981.jpg"
  },
  {
    _id: ObjectId("6591ac3bf9877e3170d90c44"),
    name: "Desenhar logotipo",
    description: "Desenhar o seu logotipo",
    picture: "files-1704052453984.jpg"
  },
  {
    _id: ObjectId("6591ac44f9877e3170d90c46"),
    name: "Criar vídeo",
    description: "Criar o seu vídeo",
    picture: "files-1704052453985.jpg"
  },
  {
    _id: ObjectId("6591ac5bf9877e3170d90c48"),
    name: "Desenvolver código",
    description: "Desenvolver código",
    picture: "files-1704052453983.jpg"
  }
])

db.createCollection("productschemas")
db.productschemas.insert([
  {
    _id: ObjectId("659802bcfed9f7066576ca77"),
    userId: ObjectId("65883ab3c89918015e25e532"),
    title: "Desenvolver Api",
    description: "Realizo o desenvolvimento de Api utilizando Nodejs e Expressjs.",
    category: ObjectId("6591ac5bf9877e3170d90c48"),
    price: 2500,
    images: [
      "files-1704052453990.jpg"
    ],
    deliveryTime: 30,
    features: [
      "Desenvolvimento web",
      "Nodejs", 
      "Expressjs",
      "SOLID"
    ],
    sales: 20,
    rating: [
      ObjectId("638a22b10ef44976d168711e")
    ],
  },
  {
    _id: ObjectId("659802bcfed9f7066576ca78"),
    userId: ObjectId("65883ab3c89918015e25e532"),
    title: "Site WordPress",
    description: "Crio o seu site, a sua loja virtual utilizando WordPress.",
    category: ObjectId("6591ac5bf9877e3170d90c48"),
    price: 900,
    images: [
      "files-1704052453982.jpg"
    ],
    deliveryTime: 15,
    features: [
      "WordPress",
      "Adobe Photoshop CS5",
      "Desenvolvimento web",
    ],
    sales: 10,
    rating: [
      ObjectId("638a236a0ef44976d1687126")
    ],
  },
  {
    _id: ObjectId("659802bcfed9f7066576ca79"),
    userId: ObjectId("65883ab3c89918015e25e532"),
    title: "Aplicativo Mobile",
    description: "Crio o aplicativo ideal para o seu negócio. Compativeis com Android e iOS.",
    category: ObjectId("6591ac5bf9877e3170d90c48"),
    price: 1550,
    images: [
      "files-1704052453991.jpg",
      "files-1704052453990.jpg"
    ],
    deliveryTime: 25,
    features: [
      "ReactNative",
      "Flutter",
      "Tipescript",
    ],
    sales: 70,
    rating: [],
  },
  {
    _id: ObjectId("65d3330b1910a8d9509197fe"),
    userId: ObjectId("65883ab3c89918015e25e532"),
    title: "Desenvolvimento de Apps e Sistemas",
    description: "Realizo o desenvolvimento de aplicativos mobile e sistemas exclusivo para o seu negócio.",
    category: ObjectId( "6591ac5bf9877e3170d90c48"),
    price: 3000,
    deliveryTime: 40,
    images: [
      "files-1708339979587.jpg"
    ],
    features: [
      "Asp.net",
      "Asp.net core",
      "Angularjs",
      "Python"
    ],
    sales: 0,
    rating: [],
  },
  {
    _id: ObjectId("65d337d01910a8d950919866"),
    userId: ObjectId("65883ab3c89918015e25e532"),
    title: "Análise de Dados Business Intelligence",
    description: "Análise de Dados Business Intelligence",
    category: ObjectId("6591ac5bf9877e3170d90c48"),
    price: 5000,
    deliveryTime: 40,
    images: [
      "files-1708341200301.jpg"
    ],
    features: [
      "Power BI",
      "BI Oracle",
      "Excel",
      "Python"
    ],
    sales: 0,
    rating: [],
  },
   {
    _id: ObjectId("65d480a976ba50e568f08e54"),
    userId: ObjectId("65883a7bc89918015e25e52e"),
    title: "Posts e mídias sociais",
    description: "Além de trabalhar com campanhas de Google Adwords, Facebook, Instagram Ads e administração de mídias sociais.",
    category: ObjectId("6591ac25f9877e3170d90c40"),
    price: 500,
    deliveryTime: 5,
    images: [
      "files-1708425385110.jpg"
    ],
    features: [
      "Google Adwords",
      "Facebook",
      "Instagram "
    ],
    sales: 0,
    rating: [],
  },
  {
    _id: ObjectId("65d4823a76ba50e568f08e5e"),
    userId: ObjectId("65883a7bc89918015e25e52e"),
    title: "Marketing Digital",
    description: "Auxilio na divulgação e comercialização de seus produtos ou serviços.",
    category: ObjectId("6591ac25f9877e3170d90c40"),
    price: 400,
    deliveryTime: 10,
    images: [
      "files-1708425786479.jpg"
    ],
    features: [
      "E-mail Marketing",
      "Redes Sociais",
      "Landing Pages",
      "Google Analytics"
    ],
    sales: 0,
    rating: [],
  },
  {
    _id: ObjectId("65d4834c76ba50e568f08e68"),
    userId: ObjectId("65883a7bc89918015e25e52e"),
    title: "Edição de vídeos",
    description: "Auxilio na criação e edição de vídeos promocionais para o seu negócio.",
    category: ObjectId("6591ac44f9877e3170d90c46"),
    price: 700,
    deliveryTime: 15,
    images: [
      "files-1708429071372.jpg"
    ],
    features: [
      "Premiere",
      "After Effects",
      "Illustrator"
    ],
    sales: 0,
    rating: [],
  },
  {
    _id: ObjectId("65d4844a76ba50e568f08e72"),
    userId: ObjectId("65883a7bc89918015e25e52e"),
    title: "Produção de Conteúdo",
    description: "Sou graduado em Letras - Licenciatura (Português). Trabalho a mais de 5 anos na área.",
    category: ObjectId("6591ac25f9877e3170d90c40"),
    price: 750,
    deliveryTime: 15,
    images: [
      "files-1708429177924.jpg"
    ],
    features: [
      "Redator",
      "Marketing digital",
      "Social media content"
    ],
    sales: 0,
    rating: [],
  }
])

db.createCollection("ratingschemas")
db.ratingschemas.insert([
  {
    _id: ObjectId("638a236a0ef44976d1687126"),
    name: "João Costa",
    text: "A criação de um site alavancou o meu negócio. Recomento a todos, o profissional é excelente.",
    score: 5,
    productId: ObjectId("659802bcfed9f7066576ca78"),
    userId: ObjectId("65883a7bc89918015e25e52f")
  },
   {
    _id: ObjectId("638a22b10ef44976d168711e"),
    name: "Marcos Silva",
    text: "A API ficou ótima, atendeu as minhas espectativas. O profissional utilizou de boas práticas de programação. Código limpo.",
    score: 4,
    productId: ObjectId("659802bcfed9f7066576ca77"),
    userId: ObjectId("65883a7bc89918015e25e52f")
  }
])

db.createCollection("messageschemas")
db.messageschemas.insert([
  {
    _id: ObjectId("65a1ad68bf2d29fd7c43ba50"),
    conversationId: ObjectId("658951d2e4e3a44b66725296"),
    userId: ObjectId("65883ab3c89918015e25e532"),
    description: "Olá, seu pedido já será entregue...",
    createdAt: "2024-01-12T21:11:44.607Z",
    updatedAt: "2024-01-12T21:11:44.607Z"
  },
  {
    _id: ObjectId("65acf30bd88db88257bfdd9e"),
    conversationId: ObjectId("658951d2e4e3a44b66725296"),
    userId: ObjectId("65a5002f9d9b340e62d233b4"),
    description: "Ok, obrigado!",
    createdAt: "2024-01-21T10:33:48.006Z",
    updatedAt: "2024-01-21T10:33:48.006Z"
}
])

db.createCollection("orderschemas")
db.orderschemas.insert([
  {
    _id: ObjectId("65b60ca19588bfeca46e5c26"),
    productId: "659802bcfed9f7066576ca78",
    title: "Site WordPress",
    description: "Site no formato onepage para confeitaria especializada em bolos e salgados.",
    status: "Finalizada",
    price: 200,
    userId: "65883ab3c89918015e25e532",
    buyerId: "65a5002f9d9b340e62d233b4",
    isCompleted: true,
    isSeller: true,
    payment_intent: "pi_3OjgfsDlLXsk0gPs10nWI7hP",
    createdAt: "2024-01-21T10:33:48.006Z",
    updatedAt: "2024-01-21T10:33:48.006Z"
  }
])



EOF
