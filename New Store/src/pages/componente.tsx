//  {/* <C.ContainerBack>
//         <C.BackButton onClick={handleBack}>
//           <BackIcon />
//           Voltar
//         </C.BackButton>
//       </C.ContainerBack>

//       <section>
//         <img />
//         <div className="description">
//           <h5 className=""> Descrição do produto</h5>
//         </div>
//       </section>

//       <Card className="h-100">
//         <Card.Img
//           variant="top"
//           src={thumbnail}
//           height="200px"
//           style={{ objectFit: "cover" }}
//         />
//         <Card.Body className="d-flex flex-column">
//           <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
//             <p className="fs-2">{title}</p>

//             <img
//               alt={"Icone"}
//               // src={like} onClick={onClickCurtida}
//             />
//             <C.Lined className="lined">
//               <p className="ms-2 text-muted ">{formatCurrency(price)}</p>
//             </C.Lined>
//             <p className="">
           
//               {formatCurrency(price - (discountPercentage * price) / 100)}{" "}
//             </p>
//           </Card.Title>
//           <div className="d-flex justify-content-between">
//             <Card.Subtitle className="mb-2 ">
//               <strong>Marca:</strong>
//               {brand}
//             </Card.Subtitle>
//             <Card.Subtitle className="mb-2 ">
//               <strong>Reputação:</strong> {rating}
//             </Card.Subtitle>
//           </div>
//           <Card.Text className="">
//             <p className="fs-2">{description}</p>
//           </Card.Text>
//           <Card.Subtitle className="mb-2 ">
//             {stock}
//             <strong> em estoque</strong>
//           </Card.Subtitle>

//           <div className="mt-auto">
//             {/* {quantity === 0 ? ( */}
//             <Button
//               className="w-100"
//               // onClick={() => increaseCartQuantity(id)}
//             >
//               + Adicionar no Carinho
//             </Button>
//             {/* ) : ( */}
//             <div
//               className="d-flex align-items-center flex-column"
//               style={{ gap: ".5rem" }}
//             >
//               <div
//                 className="d-flex align-items-center justify-content-center"
//                 style={{ gap: ".5rem" }}
//               >
//                 <Button
//                 // onClick={() => decreaseCartQuantity(id)}
//                 >
//                   -
//                 </Button>
//                 <div>
//                   <p className="fs-3">
//                     {/* {quantity}  */}
//                     qtd
//                   </p>{" "}
//                   no carrinho
//                 </div>
//                 <Button
//                 // onClick={() => increaseCartQuantity(id)}
//                 >
//                   +
//                 </Button>
//               </div>
//               <Button
//                 // onClick={() => removeFromCart(id)}
//                 variant="danger"
//                 size="sm"
//               >
//                 Remover
//               </Button>
//             </div>
//             {/* )} */}
//           </div>
//         </Card.Body>
//       </Card>