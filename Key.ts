
// import * as ed from "@noble/ed25519";

// async function main() {
//   console.log("Hello World");
//   try {
//     // Generate a secure random private key
//     const privKey = ed.utils.randomPrivateKey();

//     // Convert the message "hello world" to a Uint8Array
//     const message = new TextEncoder().encode("helloworld");
//     // %% const messagee = new TextEncoder().encode("helloworld2");

//     // Generate the public key from the private key
//     const pubKey = await ed.getPublicKey(privKey);

//     // Sign the message
//     const signature = await ed.sign(message, privKey);

//     // Verify the signature
//     const isValid = await ed.verify(signature, message, pubKey);
//     // %% const isValid = await ed.verify(signature, messagee, pubKey);

//     console.log("Signature valid:", isValid);
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// }

// main();


// ? solana 

// import { Keypair } from "@solana/web3.js";
// import nacl from "tweetnacl";

// // Generate a new keypair
// const keypair = Keypair.generate();

// // Extract the public and private keys
// const publicKey = keypair.publicKey.toString();
// const secretKey = keypair.secretKey;


// // Display the keys
// console.log("Public Key:", publicKey);
// const secretKeyBase64 = Buffer.from(secretKey).toString('base64');
// console.log("Private Key (Secret Key):", secretKeyBase64);


// // Convert the message "hello world" to a Uint8Array
// const message = new TextEncoder().encode("hello world");

// const signature = nacl.sign.detached(message, secretKey);
// const result = nacl.sign.detached.verify(
//   message,
//   signature,
//   keypair.publicKey.toBytes(),
// );

// console.log(result);
// console.log(typeof(secretKey))
// console.log(typeof(publicKey))



import * as secp from "@noble/secp256k1";

async function main() {
  const privKey = secp.utils.randomPrivateKey(); // Secure random private key
  // sha256 of 'hello world'
  const msgHash =
    "b94d27b9934d3e08a52e52d7da7dabfac484efe37a5380ee9088f7ace2efcde9";
  const pubKey = secp.getPublicKey(privKey);
  const signature = await secp.signAsync(msgHash, privKey); // Sync methods below
  const isValid = secp.verify(signature, msgHash, pubKey);
  console.log(isValid);
}

main();

// ? used in Etherium

// import { ethers } from "ethers";

// // Generate a random wallet
// const wallet = ethers.Wallet.createRandom();

// // Extract the public and private keys
// const publicKey = wallet.address;
// const privateKey = wallet.privateKey;

// console.log("Public Key (Address):", publicKey);
// console.log("Private Key:", privateKey);

// // Message to sign
// const message = "hello world";
// async function main() {
  
//   // Sign the message using the wallet's private key
//   const signature = await wallet.signMessage(message);
//   console.log("Signature:", signature);
  
//   // Verify the signature
//   const recoveredAddress = ethers.verifyMessage(message, signature);
  
//   console.log("Recovered Address:", recoveredAddress);
//   console.log("Signature is valid:", recoveredAddress === publicKey);
// }

// main();