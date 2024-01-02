import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

export const BadgeList = ({ data }) => {

    const list_badge_dict = {
        "Mới": data.is_new,
        "Bán chạy": data.is_hot,
        "Free ship": data.is_freeship,
        "Giảm giá": data.is_sale
    };

    const list_badge = Object.entries(list_badge_dict)
    .filter(([_, value]) => value)
    .map(([key, _]) => key);
    return (
        <Stack direction="horizontal" gap={2}>
            {list_badge.map((item, index) => (
                console.log(item),
                <Badge bg="info" style={{ borderRadius: 5 }}>{item}</Badge>
            ))}
            {/* {Object.keys(list_badge).map((item, index) => (
                list_badge[item] === true && (
                    <div key={index}>
                        <Badge bg="info" style={{ borderRadius: 5 }}>{item}</Badge>
                    </div>
                )
            ))} */}
        </Stack>
    );
};
