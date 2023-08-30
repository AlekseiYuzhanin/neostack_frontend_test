type ListComponentProps = {
    items: { id: string | number; text: string }[];
    style?: React.CSSProperties;
  };
  
  const ListComponent: React.FC<ListComponentProps> = ({ items, style }) => {
    return (
      <div>
        <div style={{ ...style}}>
          {items.map((item) => (
            <span key={item.id} >
              {item.text}
            </span>
          ))}
        </div>
      </div>
    );
  };

export default ListComponent;