'use client';
import { StarRating } from '@ds/map/StarRating';
import { Row } from '@stories/kit';

export default function StarRatingExample() {
  return (
    <Row gap={28} align="flex-end">
      <StarRating value={3} size={40} arc animate />
      <StarRating value={2} size={22} />
      <StarRating value={0} size={18} />
    </Row>
  );
}
