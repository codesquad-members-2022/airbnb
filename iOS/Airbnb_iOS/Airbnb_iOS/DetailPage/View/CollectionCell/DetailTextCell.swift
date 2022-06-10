//
//  DetailTextCell.swift
//  Airbnb_iOS
//
//  Created by juntaek.oh on 2022/06/06.
//

import UIKit

class DetailTextCell: UICollectionViewCell {
    
    static let identifier = "DetailTextCell"

    private let detailText: UILabel = {
        let detail = UILabel()
        detail.font = .systemFont(ofSize: 17)
        detail.numberOfLines = 3
        detail.textColor = .gray1
        detail.translatesAutoresizingMaskIntoConstraints = false
        return detail
    }()
    
    private let moreButton: UIButton = {
        let more = UIButton()
        let attributedString = NSMutableAttributedString(string: "더보기 > ", attributes: [NSAttributedString.Key.underlineStyle: NSUnderlineStyle.single.rawValue, NSAttributedString.Key.kern: 0.37, NSAttributedString.Key.font: UIFont.systemFont(ofSize: 17, weight: .semibold)])
        
        more.setAttributedTitle(attributedString, for: .normal)
        more.setTitleColor(UIColor.gray1, for: .normal)
        more.translatesAutoresizingMaskIntoConstraints = false
        return more
    }()
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        self.setLayout()
        self.setMoreButtonAction()
    }

    @available(*, unavailable)
    required init?(coder: NSCoder) {
        fatalError()
    }

    override func prepareForReuse() {
        super.prepareForReuse()
        self.configure(detail: nil)
    }

    func configure(detail: String?) {
        detailText.text = detail
    }
    
    func changeNoLimitNumberOfLines() {
        self.detailText.numberOfLines = 0
    }
    
    func changeLimitNumberOfLines() {
        self.detailText.numberOfLines = 3
    }
}

private extension DetailTextCell {

    func setMoreButtonAction() {
        if #available(iOS 14.0, *) {
            moreButton.addAction(UIAction(handler: { _ in
                NotificationCenter.default.post(name: NSNotification.Name(rawValue: "moreButton"), object: self)
            }), for: .touchDown)
        } else {
            moreButton.addTarget(self, action: #selector(touchedMoreButton), for: .touchDown)
        }
    }
    
    @objc
    func touchedMoreButton() {
        NotificationCenter.default.post(name: NSNotification.Name(rawValue: "moreButton"), object: self)
    }
    
    func setLayout() {
        contentView.addSubViews(detailText, moreButton)

        NSLayoutConstraint.activate([
            detailText.leadingAnchor.constraint(equalTo: contentView.leadingAnchor, constant: 16),
            detailText.trailingAnchor.constraint(equalTo: contentView.trailingAnchor, constant: -16),
            detailText.topAnchor.constraint(equalTo: contentView.topAnchor, constant: 24),
            detailText.heightAnchor.constraint(greaterThanOrEqualToConstant: 66)
        ])

        NSLayoutConstraint.activate([
            moreButton.leadingAnchor.constraint(equalTo: detailText.leadingAnchor),
            moreButton.topAnchor.constraint(equalTo: detailText.bottomAnchor, constant: 16),
            moreButton.widthAnchor.constraint(equalToConstant: 80),
            moreButton.heightAnchor.constraint(equalToConstant: 24)
        ])
    }
}
