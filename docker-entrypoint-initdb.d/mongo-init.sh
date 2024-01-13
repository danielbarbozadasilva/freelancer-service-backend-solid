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
    name: "Daniel Admin",
    username: "daniel111",
    email: "danielbarboza56@hotmail.com",
    cpf: "999.111.333-33",
    birthDate: "2000-03-01T05:36:40.303Z",
    picture: "files-1704052453987.jpg",
    country: "brasil",
    phone: "(21)99999-9999",
    desc: "admin",
    permissions: ["admin"],
    hash: "3178ade22cc1303f74030d7de78d79f2c155ead698e8cfe4d9faa2f98cb31d15373a47fe939f136b9cb4934cf68a45cda7dc921ee0646a0b3ada696d8057024a61ae043571737dae65f032994cdd8b9a7aa25cac0a6dbb484cd19230a9434e2a8f8f785e9ea569f4835e2d43a3948f317f6fb1420ca66ff465a79aa60ff60a652f100d965ad7137485190f4b9d45b4e6dfdab648c15d91f4f172375e2f7f4fbb65d9aff12b2f2cd9282c136da071e2568fbc3a549547b462ae79b57ac91ebcfccf8df22b4941f02da5da4dd63fabf40daa29f5e8e0b65417b5d859df7ddcd6fc336697b2b4b28adcdbc451fce4f7fb819356ba60e76433a9e41b6f4b33b4c9f5562b352356717e46d0198515ea095100d556510263a76c207d359c75c1730ae4d275cec3eca020fe36d78c8a6768a1d0d4a8d5e740d43606596eedf3cfcd2e5055c04f88cb16f5b2c0ab328140d26ba144c2acf3d90f5936a0f85593aba19d9bbb8b13e4d80252ebc8a6d3b6e70229ae6000056bbf4e05447832902005c5d45f39ea1a7197f1004419c3e04ea3fb78df1152378052da28c9589b2b015cc09728324e7e30e7a04ea3b725949899284dd59fc9ff3bd2b80148924cb9d8d0f262aa0ba7a2b00dced86dd63699d13edab68b1a348d0e6b411ddc1d4c78c0df2a3623db0d9c79aeff68f9c467a761022e8746e1dedd05808378a1829451295824db2f",
    salt: "20a4a0a78f18ab5b5359c251f6a1502f",
    isSeller: false
  },
  {
    _id: ObjectId("65883a7bc89918015e25e52e"),
    name: "Daniel Silva",
    username: "daniel935",
    email: "daniel80barboza@gmail.com",
    cpf: "333.333.333-33",
    birthDate: "2000-03-01T05:36:40.303Z",
    picture: "files-1704052453988.jpg",
    country: "brasil",
    phone: "(21)99999-9999",
    desc: "Desenvolvedor web",
    permissions: ["client"],
    hash: "3178ade22cc1303f74030d7de78d79f2c155ead698e8cfe4d9faa2f98cb31d15373a47fe939f136b9cb4934cf68a45cda7dc921ee0646a0b3ada696d8057024a61ae043571737dae65f032994cdd8b9a7aa25cac0a6dbb484cd19230a9434e2a8f8f785e9ea569f4835e2d43a3948f317f6fb1420ca66ff465a79aa60ff60a652f100d965ad7137485190f4b9d45b4e6dfdab648c15d91f4f172375e2f7f4fbb65d9aff12b2f2cd9282c136da071e2568fbc3a549547b462ae79b57ac91ebcfccf8df22b4941f02da5da4dd63fabf40daa29f5e8e0b65417b5d859df7ddcd6fc336697b2b4b28adcdbc451fce4f7fb819356ba60e76433a9e41b6f4b33b4c9f5562b352356717e46d0198515ea095100d556510263a76c207d359c75c1730ae4d275cec3eca020fe36d78c8a6768a1d0d4a8d5e740d43606596eedf3cfcd2e5055c04f88cb16f5b2c0ab328140d26ba144c2acf3d90f5936a0f85593aba19d9bbb8b13e4d80252ebc8a6d3b6e70229ae6000056bbf4e05447832902005c5d45f39ea1a7197f1004419c3e04ea3fb78df1152378052da28c9589b2b015cc09728324e7e30e7a04ea3b725949899284dd59fc9ff3bd2b80148924cb9d8d0f262aa0ba7a2b00dced86dd63699d13edab68b1a348d0e6b411ddc1d4c78c0df2a3623db0d9c79aeff68f9c467a761022e8746e1dedd05808378a1829451295824db2f",
    salt: "20a4a0a78f18ab5b5359c251f6a1502f",
    isSeller: true
  },
  {
    _id: ObjectId("65883ab3c89918015e25e532"),
    name: "Daniel Barboza",
    username: "daniel123",
    email: "daniel95barboza@gmail.com",
    cpf: "111.222.333-33",
    birthDate: "2001-03-01T05:36:40.404Z",
    picture: "files-1704052453989.jpg",
    country: "brasil",
    phone: "(21)99999-9999",
    desc: "Desenvolvedor backend",
    permissions: ["client"],
    hash: "d827891175fabfa8c46b5da4e78d4e18d4d13cb9436bd39ea829be4c661b727b8f07c7d81c8f4d046ac33b2d3b588114d214d3f3b906dad9dd147a15bef04e78134b70c1a40de68226463c4d6a06816a8f2ff9a2c908493a6d12dbd7e4e6f074f7acc762cd75458d82e0cc140f03242e5057397902bc3aa4eab4cd50e1ef395d1c965d04bfe668e8a73a5abd3067f2608b33bad41caf0c31144810b6fb00362e5442d89662658cc0ad84305f4ac87e54c231b65d75c06a59da9aa6c4381c53ab6c4035a601d5e953720c2965ee4c6ec2aa1560009d648fe46ce479f4061dd6628cf01356946605a1e01935a4c98a079e80f3935556ef4491d31fe0a9cb02efc1aa7cb6b8d4009e27a87b3b18d6d0113c2ba28a8de2c8f82379eedecb3b37d8e8064c5c8c25241fb73d80a365ae64ab518b82709120019a170fcc4be1a48b31d8482517d94319b6d395c830cdada31c602a3c0fd7fdcd90339933db1a6e5e4ee917564dc6f8268df6dc324f60c7bdf0dd2ce5f5ec8600475a960e82103613e8df55f7e15424e547a673e3a5f4faa1ccd4f201d9ec0dbb883e020dd5fd6b63fffcca5c5eb7fdfc4a5b30f0258313197292214c3bea36295fda5429e1703b41ce3d7977167859596a518772eeb4bb0be38553371ca5c3cec1f5e7392edced3faf3971f48cf4e59f24b37037b5180e036d3e74ce22d99be3cceafd0cea3b2ddfe5cf",
    salt: "a9a28c74479228ffc02a7da3ca80ccdc",
    isSeller: true
  }
])

db.createCollection("conversationschemas")
db.conversationschemas.insert([
  {
    _id: ObjectId("658951d2e4e3a44b66725296"),
    id: "65883a7bc89918015e25e52e65883ab3c89918015e25e532",
    sellerId: "65883a7bc89918015e25e52e",
    buyerId: "65883ab3c89918015e25e532",
    readBySeller: true,
    readByBuyer: false
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
    title: "Desenvolvedor Full Stack",
    description: "Experiência em desenvolvimento web full stack",
    category: ObjectId("6591ac5bf9877e3170d90c48"),
    price: 50,
    promotion: 50,
    images: [
      "files-1704052453982.jpg"
    ],
    deliveryTime: 7,
    features: [
      "Desenvolvimento web",
      "APIs RESTful",
      "React",
      "Node.js", 
      "Express"
    ],
    sales: 0,
    rating: [
      ObjectId("638a22b10ef44976d168711e")
    ],
  },
  {
    _id: ObjectId("659802bcfed9f7066576ca78"),
    userId: ObjectId("65883ab3c89918015e25e532"),
    title: "Desenvolvedor Backend",
    description: "Experiência em desenvolvimento backend",
    category: ObjectId("6591ac5bf9877e3170d90c48"),
    price: 50,
    promotion: 50,
    images: [
      "files-1704052453982.jpg"
    ],
    deliveryTime: 7,
    features: [
      "Node.js", 
      "Express"
    ],
    sales: 0,
    rating: [
      ObjectId("638a236a0ef44976d1687126")
    ],
  }
])

db.createCollection("ratingschemas")
db.ratingschemas.insert([
  {
    _id: ObjectId("638a236a0ef44976d1687126"),
    name: "João Costa",
    text: "Gostei bastante.",
    score: 5,
    productId: ObjectId("659802bcfed9f7066576ca78"),
    userId: ObjectId("65883a7bc89918015e25e52f")
  },
   {
    _id: ObjectId("638a22b10ef44976d168711e"),
    name: "Marcos Silva",
    text: "Simplismente perfeito.",
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
    description: "fdasdfsdfasfsadfsdfdsfs",
    createdAt: "2024-01-12T21:21:44.607Z",
    updatedAt: "2024-01-12T21:21:44.607Z"
  }
])

EOF
