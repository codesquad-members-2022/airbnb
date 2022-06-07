//
//  SearchInfoTrackingTableViewCell.swift
//  Airbnb
//
//  Created by 백상휘 on 2022/06/06.
//

import UIKit

class SearchInfoTrackingTableViewCell: UITableViewCell {
    
    static var reuseIdentifier: String {
        return String(describing: SearchInfoTrackingTableViewCell.self)
    }
    
    private let titleLabel: UILabel = {
        let label = UILabel()
        label.textAlignment = .left
        label.font = UIFont(name: label.font.fontName, size: 17)
        label.textColor = .label
        label.minimumScaleFactor = 0.5
        return label
    }()
    
    private let contentsLabel: UILabel = {
        let label = UILabel()
        label.textAlignment = .right
        label.font = UIFont(name: label.font.fontName, size: 17)
        label.textColor = .secondaryLabel
        label.minimumScaleFactor = 0.5
        return label
    }()
    
    private let dateFormatter: DateFormatter = {
        let formatter = DateFormatter()
        formatter.locale = Locale(identifier: "ko_kr")
        formatter.dateFormat = "MM dd"
        return formatter
    }()
    
    private let numberFormatter: NumberFormatter = {
        let formatter = NumberFormatter()
        return formatter
    }()

    override func awakeFromNib() {
        super.awakeFromNib()
        setLayout()
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)
        setLayout()
    }
    
    private func setLayout() {
        self.contentView.addSubview(titleLabel)
        self.contentView.addSubview(contentsLabel)
        
        titleLabel.snp.makeConstraints {
            $0.top.bottom.equalToSuperview().inset(11)
            $0.leading.equalToSuperview().offset(16)
            $0.width.equalTo(self.contentView.frame.width * 0.4)
        }
        
        contentsLabel.snp.makeConstraints {
            $0.top.bottom.equalToSuperview().inset(11)
            $0.trailing.equalToSuperview().offset(11)
            $0.leading.equalTo(self.titleLabel.snp.trailing)
        }
    }
    
    func setInformation(_ dto: SearchInfo, infoType: SearchInfoType) {
        titleLabel.text = infoType.rawValue
        var contents: String?
        
        switch infoType {
        case .location:
            contents = dto.location
        case .date:
            if let date = dto.checkInDate {
                contents = dateFormatter.string(from: date)
            }
            
            contents = " ~ "
            
            if let date = dto.checkOutDate {
                if contents == " ~ " { contents = nil }
                contents = dateFormatter.string(from: date)
            }
        case .price:
            numberFormatter.currencySymbol = dto.priceUnit.rawValue
            contents = numberFormatter.string(from: NSNumber(value: dto.pricePerDay))
        case .headCount:
            contents = "\(dto.headCount)"
        }
        
        contentsLabel.text = contents
    }
}
