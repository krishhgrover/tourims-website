var con = require('../db');

var sql = `
INSERT INTO holiday_packages 
(name, location, price, duration, description, image, category)
VALUES 

('Goa Beach Fun', 'Goa', 15000, '3 Days', 'Enjoy beaches and nightlife', 'https://images.unsplash.com/photo-1589307004394-0f6d6e0e1c57', 'budget'),
('Manali Adventure', 'Manali', 20000, '5 Days', 'Snow and adventure sports', 'https://images.unsplash.com/photo-1605540436563-5bca919ae766', 'adventure'),
('Kerala Backwaters', 'Kerala', 18000, '4 Days', 'Relaxing houseboat experience', 'https://images.unsplash.com/photo-1593691509543-c55fb32c8b7c', 'relax'),
('Rajasthan Heritage Tour', 'Jaipur & Udaipur', 25000, '6 Days', 'Forts, palaces and culture', 'https://images.unsplash.com/photo-1599661046289-e31897846e41', 'heritage'),
('Kashmir Paradise', 'Kashmir', 30000, '5 Days', 'Beautiful valleys and snow', 'https://images.unsplash.com/photo-1627894483216-2138af692e32', 'romantic'),
('Andaman Islands', 'Andaman', 35000, '5 Days', 'Crystal clear water and beaches', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', 'luxury'),
('Rishikesh Adventure', 'Rishikesh', 12000, '3 Days', 'River rafting and camping', 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2', 'adventure'),
('Darjeeling Hills', 'Darjeeling', 17000, '4 Days', 'Tea gardens and mountain views', 'https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990', 'nature'),
('Ooty Retreat', 'Ooty', 14000, '3 Days', 'Cool climate and scenic beauty', 'https://images.unsplash.com/photo-1621337205950-5a5e9d3f4042', 'relax'),
('Leh Ladakh Road Trip', 'Ladakh', 40000, '7 Days', 'High altitude adventure ride', 'https://images.unsplash.com/photo-1609137144813-7d9921338f24', 'adventure'),

('Dubai Luxury Trip', 'Dubai', 80000, '4 Days', 'Luxury shopping and desert safari', 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c', 'luxury'),
('Bali Beach Escape', 'Bali', 60000, '5 Days', 'Tropical beaches and temples', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', 'romantic'),
('Thailand Fun Tour', 'Bangkok & Phuket', 50000, '5 Days', 'Nightlife and beaches', 'https://images.unsplash.com/photo-1504214208698-ea1916a2195a', 'budget'),
('Singapore City Tour', 'Singapore', 70000, '4 Days', 'Modern city and attractions', 'https://images.unsplash.com/photo-1508962914676-134849a727f0', 'family'),
('Maldives Honeymoon', 'Maldives', 120000, '4 Days', 'Private villas and beaches', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', 'romantic'),
('Europe Highlights', 'Paris & Rome', 150000, '7 Days', 'Historic cities and culture', 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34', 'luxury'),
('Switzerland Alps', 'Switzerland', 180000, '6 Days', 'Snowy mountains and trains', 'https://images.unsplash.com/photo-1501785888041-af3ef285b470', 'luxury'),
('Japan Explorer', 'Tokyo & Kyoto', 140000, '6 Days', 'Technology and tradition mix', 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c', 'culture'),
('Australia Adventure', 'Sydney & Melbourne', 130000, '7 Days', 'City life and nature', 'https://images.unsplash.com/photo-1506973035872-a4ec16b8d8d2', 'adventure'),
('New York City Break', 'USA', 110000, '5 Days', 'Urban exploration and landmarks', 'https://images.unsplash.com/photo-1490578474895-699cd4e2cf59', 'city'),
('Turkey Experience', 'Istanbul & Cappadocia', 90000, '6 Days', 'Hot air balloons and history', 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200', 'culture')
`;

con.query(sql, function (err, result) {
  if (err) throw err;
  console.log("21 Packages inserted successfully!");
});