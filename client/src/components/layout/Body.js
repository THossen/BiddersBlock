function Body(props) {
  return (
    <div className="min-h-screen bg-white flex flex-col flex-1">
      {props.children}
    </div>
  );
}

export default Body;
