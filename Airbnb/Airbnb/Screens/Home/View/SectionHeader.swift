//
//  Header.swift
//  Airbnb
//
//  Created by Kai Kim on 2022/05/25.
//

import UIKit

final class SectionHeader: UICollectionReusableView {

    static let id = "SectionHeader"

    var viewModel: SearchHeaderViewModel? {
        didSet {
            guard let headerVM = viewModel else {return}
            self.title.text = headerVM.title
        }
    }

    private var title: UILabel = {
        let label  = UILabel()
        label.font = .mediumRegular
        label.numberOfLines =  0
        return label
    }()

    override init(frame: CGRect) {
        super.init(frame: frame)
        addSubview(title)
        title.frame = bounds
    }

    func configureCell(title: String) {
        self.title.text = title
    }

    required init?(coder: NSCoder) {
        fatalError("init(coder:) has not been implemented")
    }

}
