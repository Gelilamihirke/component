import React, { useEffect, useState } from "react";

const timezonesByRegion = {
  "US / Canada": [
    { label: "Pacific Time", zone: "America/Los_Angeles" },
    { label: "Mountain Time", zone: "America/Denver" },
    { label: "Central Time", zone: "America/Chicago" },
    { label: "Eastern Time", zone: "America/New_York" },
    { label: "Alaska Time", zone: "America/Anchorage" },
    { label: "Hawaii-Aleutian Time", zone: "America/Adak" },
    { label: "Atlantic Time", zone: "America/Halifax" },
    { label: "Newfoundland Time", zone: "America/St_Johns" },
  ],
  America: [
    { label: "Argentina Time", zone: "America/Argentina/Buenos_Aires" },
    { label: "Bogota Time", zone: "America/Bogota" },
    { label: "Caracas Time", zone: "America/Caracas" },
    { label: "Santiago Time", zone: "America/Santiago" },
    { label: "Mexico City Time", zone: "America/Mexico_City" },
    { label: "Guatemala Time", zone: "America/Guatemala" },
    { label: "Costa Rica Time", zone: "America/Costa_Rica" },
    { label: "Panama Time", zone: "America/Panama" },
    { label: "Lima Time", zone: "America/Lima" },
    { label: "La Paz Time", zone: "America/La_Paz" },
    { label: "Montevideo Time", zone: "America/Montevideo" },
    { label: "Curacao Time", zone: "America/Curacao" },
    { label: "Port-au-Prince Time", zone: "America/Port-au-Prince" },
    { label: "Havana Time", zone: "America/Havana" },
    { label: "Guayaquil Time", zone: "America/Guayaquil" },
    { label: "Belize Time", zone: "America/Belize" },
    { label: "Asuncion Time", zone: "America/Asuncion" },
    { label: "Paramaribo Time", zone: "America/Paramaribo" },
  ],
  Africa: [
    { label: "West Africa Time", zone: "Africa/Lagos" },
    { label: "Central Africa Time", zone: "Africa/Maputo" },
    { label: "East Africa Time", zone: "Africa/Nairobi" },
    { label: "South Africa Standard Time", zone: "Africa/Johannesburg" },
    { label: "Algiers Time", zone: "Africa/Algiers" },
  ],
  Asia: [
    { label: "India Standard Time", zone: "Asia/Kolkata" },
    { label: "China Standard Time", zone: "Asia/Shanghai" },
    { label: "Japan Standard Time", zone: "Asia/Tokyo" },
    { label: "Korea Standard Time", zone: "Asia/Seoul" },
    { label: "Singapore Time", zone: "Asia/Singapore" },
    { label: "Jakarta Time", zone: "Asia/Jakarta" },
    { label: "Dubai Time", zone: "Asia/Dubai" },
    { label: "Tehran Time", zone: "Asia/Tehran" },
    { label: "Riyadh Time", zone: "Asia/Riyadh" },
    { label: "Kabul Time", zone: "Asia/Kabul" },
    { label: "Colombo Time", zone: "Asia/Colombo" },
    { label: "Damascus Time", zone: "Asia/Damascus" },
    { label: "Jerusalem Time", zone: "Asia/Jerusalem" },
    { label: "Hong Kong Time", zone: "Asia/Hong_Kong" },
    { label: "Ulaanbaatar Time", zone: "Asia/Ulaanbaatar" },
    { label: "Kathmandu Time", zone: "Asia/Kathmandu" },
    { label: "Vientiane Time", zone: "Asia/Vientiane" },
    { label: "Hanoi Time", zone: "Asia/Bangkok" },
    { label: "Yerevan Time", zone: "Asia/Yerevan" },
    { label: "Baku Time", zone: "Asia/Baku" },
    { label: "Tbilisi Time", zone: "Asia/Tbilisi" },
    { label: "Ashgabat Time", zone: "Asia/Ashgabat" },
    { label: "Dushanbe Time", zone: "Asia/Dushanbe" },
    { label: "Tashkent Time", zone: "Asia/Tashkent" },
    { label: "Muscat Time", zone: "Asia/Muscat" },
    { label: "Phnom Penh Time", zone: "Asia/Phnom_Penh" },
  ],
  Atlantic: [
    { label: "Azores Time", zone: "Atlantic/Azores" },
    { label: "Cape Verde Time", zone: "Atlantic/Cape_Verde" },
  ],
  Australia: [
    { label: "Australian Western Time", zone: "Australia/Perth" },
    { label: "Australian Central Time", zone: "Australia/Adelaide" },
    { label: "Australian Central Western Time", zone: "Australia/Eucla" },
    { label: "Australian Eastern Time", zone: "Australia/Sydney" },
    { label: "Lord Howe Time", zone: "Australia/Lord_Howe" },
    { label: "Tasmania Time", zone: "Australia/Hobart" },
    { label: "Brisbane Time", zone: "Australia/Brisbane" },
  ],
  UTC: [
    { label: "Coordinated Universal Time", zone: "UTC" },
  ],
  Europe: [
    { label: "Western European Time", zone: "Europe/Lisbon" },
    { label: "Central European Time", zone: "Europe/Berlin" },
    { label: "Eastern European Time", zone: "Europe/Kiev" },
    { label: "Moscow Time", zone: "Europe/Moscow" },
    { label: "Istanbul Time", zone: "Europe/Istanbul" },
    { label: "Paris Time", zone: "Europe/Paris" },
  ],
  Pacific: [
    { label: "Hawaii Time", zone: "Pacific/Honolulu" },
    { label: "Fiji Time", zone: "Pacific/Fiji" },
    { label: "Guam Time", zone: "Pacific/Guam" },
    { label: "Noumea Time", zone: "Pacific/Noumea" },
    { label: "Port Moresby Time", zone: "Pacific/Port_Moresby" },
    { label: "Chatham Islands Time", zone: "Pacific/Chatham" },
    { label: "Auckland Time", zone: "Pacific/Auckland" },
    { label: "Tahiti Time", zone: "Pacific/Tahiti" },
    { label: "Tongatapu Time", zone: "Pacific/Tongatapu" },
    { label: "Pago Pago Time", zone: "Pacific/Pago_Pago" },
    { label: "Midway Time", zone: "Pacific/Midway" },
    { label: "Apia Time", zone: "Pacific/Apia" },
    { label: "Wake Time", zone: "Pacific/Wake" },
    { label: "Majuro Time", zone: "Pacific/Majuro" },
    { label: "Palau Time", zone: "Pacific/Palau" },
    { label: "Kosrae Time", zone: "Pacific/Kosrae" },
  ],
};

const TimezoneList = ({ onSelect, currentZone }) => {
  const [times, setTimes] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const updateTimes = () => {
      const newTimes = {};
      Object.values(timezonesByRegion).flat().forEach(({ zone }) => {
        const time = new Intl.DateTimeFormat("en-US", {
          timeZone: zone,
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }).format(new Date());
        newTimes[zone] = time;
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filterZones = (zones) =>
    zones.filter(({ label, zone }) =>
      label.toLowerCase().includes(searchTerm) ||
      zone.toLowerCase().includes(searchTerm)
    );

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-3 py-1.5 mb-2 border text-black border-primary-80 rounded text-sm focus:outline-none focus:ring focus:ring-blue-200"
        onChange={handleSearch}
        value={searchTerm}
      />

      {Object.entries(timezonesByRegion).map(([region, zones]) => {
        const filteredZones = filterZones(zones);
        if (filteredZones.length === 0) return null;

        return (
          <div key={region}>
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              {region}
            </h4>
            <ul className="space-y-1">
              {filteredZones.map(({ label, zone }) => (
                <li
                  key={zone}
                  className={`flex justify-between items-center px-2 py-1 text-sm rounded cursor-pointer ${
                    zone === currentZone
                      ? "bg-primary-20 text-primary"
                      : "hover:bg-primary-20 text-gray-700"
                  }`}
                  onClick={() => onSelect({ label, zone })}
                >
                  <span>{label}</span>
                  <span className="text-xs font-mono">{times[zone] || "--:--"}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default TimezoneList;