import headerStyles from "../styles/Header.module.css";

const Header = () => {
  const x = 2;
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>Header</span> Here
      </h1>
      <p className={headerStyles.description}>Desc goes here</p>
      <style jsx>
        {`
          .title {
            color: ${x > 3 ? "red" : "blue"};
          }
        `}
      </style>
    </div>
  );
};

export default Header;
